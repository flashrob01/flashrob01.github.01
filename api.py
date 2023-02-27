from tiingo import TiingoClient
import tiingo
import urllib
from flask import Flask, jsonify
from flask import request
from flask import Response
from flask_cors import CORS
from datetime import date
import datetime
import json
import requests
import numpy as np

import time


from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.deterministic import CalendarFourier, DeterministicProcess

from sklearn.linear_model import LinearRegression


""" import plotly

import plotly.express as px

import plotly.graph_objs as go """
import pandas as pd

from functools import reduce

""" from dbnomics import fetch_series, fetch_series_by_api_link
 """


app = Flask(__name__, static_folder='api/build')
app.secret_key = "secKeyy"
CORS(app)


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')

########################


@app.route('/api/time')
def get_current_time():
    return {'time': 'robby'}


@app.route('/api/neoprice')
def find_the_score():
    """ reg_form = RegForm() 

     ticker_symbol = ['NEOUSD']

    df = client.get_dataframe(
        ticker_symbol, metric_name='adjClose', startDate='2021-01-25', endDate='2021-01-29')

    df = df.dropna()
    print('this is df', df)

    print('this is df_head', df.head())

    print('this is df_columns', df.columns())

    print('this is df_size', df.size())

    print('this is df_info', df.info())

    features = df.loc[:, ticker_symbol].values.reshape(-1, 1)

    features = json.dumps(features)

    print('this is features', features)

    return features """

    Dict = {'api_key': '880375d7add24b9d0bf1017ac7f7d5a0de10302b'}

    client = TiingoClient(Dict)

    start = '2022-08-01'

    end = str(date.today())

    df_crypto = client.get_crypto_price_history(tickers=['NEOUSD'], startDate=start,
                                                endDate=end, resampleFreq='24Hour')
    # https://readthedocs.org/projects/tiingo-python/downloads/pdf/latest/
    # Usage of getting crypto prices

    #print('this is df_crypto', df_crypto)

    column_names = ['date', 'close']

    df_crypto = pd.DataFrame(
        df_crypto[0]['priceData'], columns=column_names).set_index('date')
    df_crypto.index = pd.to_datetime(df_crypto.index).tz_localize(None)

    print('this is df_crypto-Hi!', df_crypto)
    dependent_var_crypto = df_crypto['close']
    # dependent_var_crypto.tail()
    # Convert json object returned to dataframe
    # https://rebalanced.finance/python-x-tiingo-a-buttery-smooth-api-for-stock-and-crypto-prices

    print('this is df_crypto revised', df_crypto)

    df_crypto = df_crypto.to_json()

    ##df_crypto = df_crypto.values.tolist()
    # the above works to only return values of df

    return df_crypto


@app.route('/api/seasonality/get')
def find_seasonality():
    """ reg_form = RegForm() """

    Dict = {'api_key': '880375d7add24b9d0bf1017ac7f7d5a0de10302b'}

    client = TiingoClient(Dict)

    ticker_symbol = ['USDNEO']

    """ JSONdata = request.get_json()

    print("this is JSONdata", JSONdata)

    start = JSONdata['begDate']

    end = JSONdata['endDate']

    period = JSONdata['period'] """

    start = '2016-01-01'

    end = str(date.today())

    period = '365'

    period = int(period)
    # this is necessary since otherwise period will be input as type str, which will screw things up!
    # https://stackoverflow.com/questions/71274941/typeerror-not-supported-between-instances-of-str-and-int-in-python-oop

    df_crypto_seasonal = client.get_crypto_price_history(tickers=['NEOUSD'], startDate=start,
                                                         endDate=end, resampleFreq='24Hour')
    # https://readthedocs.org/projects/tiingo-python/downloads/pdf/latest/
    # Usage of getting crypto prices

    #print('this is df_crypto', df_crypto)

    column_names = ['date', 'close']

    df_crypto_seasonal = pd.DataFrame(
        df_crypto_seasonal[0]['priceData'], columns=column_names).set_index('date')
    df_crypto_seasonal.index = pd.to_datetime(
        df_crypto_seasonal.index).tz_localize(None)

    print('this is df_crypto_seasonal-Hi!', df_crypto_seasonal)
    dependent_var_crypto_seasonal = df_crypto_seasonal['close']
    # dependent_var_crypto.tail()
    # Convert json object returned to dataframe
    # https://rebalanced.finance/python-x-tiingo-a-buttery-smooth-api-for-stock-and-crypto-prices

    print('this is df_crypto_seasonal revised', df_crypto_seasonal)

    print('this is dependent_var_crypto_seasonal',
          dependent_var_crypto_seasonal)

    decomposition = seasonal_decompose(df_crypto_seasonal['close'],
                                       model='additive',
                                       period=(period))
    # 252 * 8.6 = 2167

    print('this is decomposition', decomposition)

    # decomposition.plot()

    seasonal_observed = decomposition.observed
    seasonal_decomp = decomposition.seasonal
    seasonal_resid = decomposition.resid
    seasonal_trend = decomposition.trend

    df_season = pd.DataFrame(
        {'date': seasonal_decomp.index, 'close': seasonal_decomp.values})
    df_season['date'] = df_season['date'].astype(str)

    df_season.rename(columns={"close": "close_season"}, inplace=True)

    #graphJSON = plotly.io.to_json(fig, pretty=True)
    # https://plotly.github.io/plotly.py-docs/generated/plotly.io.to_json.html
    # This is what/all you need to properly export plots to JS!

    df_resid = pd.DataFrame(
        {'date': seasonal_resid.index, 'close': seasonal_resid.values})
    df_resid['date'] = df_resid['date'].astype(str)

    df_resid.rename(columns={"close": "close_resid"}, inplace=True)

    print('this is df_resid', df_resid)

    df_trend = pd.DataFrame(
        {'date': seasonal_trend.index, 'close': seasonal_trend.values})
    df_trend['date'] = df_trend['date'].astype(str)

    df_trend.rename(columns={"close": "close_trend"}, inplace=True)

    print('this is df_trend', df_trend)

    df_observed = pd.DataFrame(
        {'date': seasonal_observed.index, 'close': seasonal_observed.values})
    df_observed['date'] = df_observed['date'].astype(str)

    df_observed.rename(columns={"close": "close_observed"}, inplace=True)

    print('this is df_observed', df_observed)

    data_frames = [df_observed, df_trend, df_season, df_resid]

    date_dummy = df_observed.loc[:, 'date']
    # creates dummy dates in df_observed
    extracted_col = df_observed['date']
    # extracts 'date' column from df_observed

    df_dates = df_trend.loc[:, 'date']
    # get all dates, since seasonal_decomposition deletes dates from dataset! Then add back in to merged_df

    df_dates = pd.DataFrame(df_dates)

    # turns df_dates from a series to a dataframe- necessary step

    df_merged = df_observed.merge(df_trend, how="left").merge(
        df_season, how="left").merge(df_resid, how="left").join(df_dates, how="left",  lsuffix='_left', rsuffix='_right')

    df_merged = df_merged.merge(df_dates, left_index=True, right_index=True)

    # need to add df_dates separately to df_merged because it doesn't have a common index with others..?

    ##print('this is df_merged')

    df_merged = df_merged.drop('date_right', axis=1)

    df_merged = df_merged.drop('date_left', axis=1)

    # dropping the date prevented duplicated columns; erasing the dual line problem
    # make sure all extraneous/ duplicate columns are dropped! Otherwise screws stuff up...

    print('this is df_merged.head', df_merged.head(400))

    df_merged = df_merged.to_json()

    #print('this is df_merged_last', df_merged)

    return df_merged


@app.route('/api/seasonality/post', methods=["POST"])
def find_seasonality_post():

    Dict = {'api_key': '880375d7add24b9d0bf1017ac7f7d5a0de10302b'}

    client = TiingoClient(Dict)

    #ticker_symbol = ['NEOUSD']

    JSONdata = request.get_json()

    print("this is JSONdata", JSONdata)

    #start = JSONdata['begDate']

    #end = JSONdata['endDate']

    ticker = JSONdata['ticker']

    period = JSONdata['period']

    start = '2010-01-01'

    end = str(date.today())

    #period = '365'

    period = int(period)
    # this is necessary since otherwise period will be input as type str, which will screw things up!
    # https://stackoverflow.com/questions/71274941/typeerror-not-supported-between-instances-of-str-and-int-in-python-oop

    df_crypto_seasonal = client.get_crypto_price_history(tickers=[ticker], startDate=start,
                                                         endDate=end, resampleFreq='24Hour')
    # https://readthedocs.org/projects/tiingo-python/downloads/pdf/latest/
    # Usage of getting crypto prices

    #print('this is df_crypto', df_crypto)

    column_names = ['date', 'close']

    df_crypto_seasonal = pd.DataFrame(
        df_crypto_seasonal[0]['priceData'], columns=column_names).set_index('date')

    df_crypto_seasonal.index = pd.to_datetime(
        df_crypto_seasonal.index).tz_localize(None)

    #print('this is df_crypto_seasonal-Hi!', df_crypto_seasonal)

    if ticker == 'NEOUSD':

        oldNEO = pd.read_csv('oldNEO.csv', index_col='date')

        #print('this is oldNEO', oldNEO)

        oldNEO.index = pd.to_datetime(
            oldNEO.index).tz_localize(None)

        oldNEO['close'] = pd.to_numeric(oldNEO['close'])

        df_crypto_seasonal = pd.merge(
            oldNEO, df_crypto_seasonal, how="outer", on=["date", "close"]
        )
    # oldNEO is the data from 2016-2017 for NEO that Tiingo does not have. Got data from coinmarketcap manually and merged into Tiingo's dataset!!! Woot!!!

    else:
        ""

    dependent_var_crypto_seasonal = df_crypto_seasonal['close']
    # dependent_var_crypto.tail()
    # Convert json object returned to dataframe
    # https://rebalanced.finance/python-x-tiingo-a-buttery-smooth-api-for-stock-and-crypto-prices

    print('this is df_crypto_seasonal revised', df_crypto_seasonal)

    print('this is dependent_var_crypto_seasonal',
          dependent_var_crypto_seasonal)

    decomposition = seasonal_decompose(df_crypto_seasonal['close'],
                                       model='additive',
                                       period=(period))
    # 252 * 8.6 = 2167

    print('this is decomposition', decomposition)

    # decomposition.plot()

    seasonal_observed = decomposition.observed
    seasonal_decomp = decomposition.seasonal
    seasonal_resid = decomposition.resid
    seasonal_trend = decomposition.trend

    df_season = pd.DataFrame(
        {'date': seasonal_decomp.index, 'close': seasonal_decomp.values})
    df_season['date'] = df_season['date'].astype(str)

    df_season.rename(columns={"close": "close_season"}, inplace=True)

    #graphJSON = plotly.io.to_json(fig, pretty=True)
    # https://plotly.github.io/plotly.py-docs/generated/plotly.io.to_json.html
    # This is what/all you need to properly export plots to JS!

    df_resid = pd.DataFrame(
        {'date': seasonal_resid.index, 'close': seasonal_resid.values})
    df_resid['date'] = df_resid['date'].astype(str)

    df_resid.rename(columns={"close": "close_resid"}, inplace=True)

    print('this is df_resid', df_resid)

    df_trend = pd.DataFrame(
        {'date': seasonal_trend.index, 'close': seasonal_trend.values})
    df_trend['date'] = df_trend['date'].astype(str)

    df_trend.rename(columns={"close": "close_trend"}, inplace=True)

    print('this is df_trend', df_trend)

    df_observed = pd.DataFrame(
        {'date': seasonal_observed.index, 'close': seasonal_observed.values})
    df_observed['date'] = df_observed['date'].astype(str)

    df_observed.rename(columns={"close": "close_observed"}, inplace=True)

    print('this is df_observed', df_observed)

    data_frames = [df_observed, df_trend, df_season, df_resid]

    date_dummy = df_observed.loc[:, 'date']
    # creates dummy dates in df_observed
    extracted_col = df_observed['date']
    # extracts 'date' column from df_observed

    df_dates = df_trend.loc[:, 'date']
    # get all dates, since seasonal_decomposition deletes dates from dataset! Then add back in to merged_df

    df_dates = pd.DataFrame(df_dates)

    # turns df_dates from a series to a dataframe- necessary step

    df_merged = df_observed.merge(df_trend, how="left").merge(
        df_season, how="left").merge(df_resid, how="left").join(df_dates, how="left",  lsuffix='_left', rsuffix='_right')

    df_merged = df_merged.merge(df_dates, left_index=True, right_index=True)

    # need to add df_dates separately to df_merged because it doesn't have a common index with others..?

    ##print('this is df_merged')

    df_merged = df_merged.drop('date_right', axis=1)

    df_merged = df_merged.drop('date_left', axis=1)

    # dropping the date prevented duplicated columns; erasing the dual line problem
    # make sure all extraneous/ duplicate columns are dropped! Otherwise screws stuff up...

    #print('this is df_merged')

    df_merged = df_merged.to_json()

    #print('this is df_merged_last', df_merged)

    return df_merged
# this is for if we want user to be able to enter manual values


@app.route('/api/regression')
def find_the_score2():
    """ reg_form = RegForm() """

    Dict = {'api_key': '880375d7add24b9d0bf1017ac7f7d5a0de10302b'}

    client = TiingoClient(Dict)

    #JSONdata = request.get_json()
    # this is the bugger!!!

    #print("this is JSONdata", JSONdata)

    """ start = JSONdata['begDate']

    end = JSONdata['endDate'] """

    start = '2022-08-01'

    end = '2023-02-01'

    """ df = client.get_ticker_price(tickers=['AMD'], startDate=start,
                                 endDate=end, frequency='daily') """

    ##stocks = ['GOOGL', 'NEOUSD']

    # df_crypto = client.get_crypto_price_history(tickers=['NEOUSD', 'BTCUSD'], startDate=start,
    # endDate=end, resampleFreq='24Hour')

    #print('this is regression_price_btc_neo', df_crypto)

    ##column_names = ['date', 'close']

    """ df_crypto = pd.DataFrame(
        df_crypto[0]['priceData'], columns=column_names).set_index('date')
    df_crypto.index = pd.to_datetime(
        df_crypto.index).tz_localize(None) """

    #print('this is df_crypto_regression_twocolumns', df_crypto)

    ##df_crypto = df_crypto.dropna()
    """ drops N/A """

    ##ls_key = 'close'
    """ ls_key specifies the column name you want to select from the Excel dataset! """

    ##cleanData = df_crypto[ls_key]

    ##dataFrame = pd.DataFrame(cleanData)

    ##print("This is dataFrame_cleaned", dataFrame)

    ##print('this is df_merged_last', df_merged)

    # need to convert dataframe to JSON before returning or else will receive errors!

    ##features = dataFrame.iloc[:, -1].values.reshape(-1, 1)

    """ stocks[:-1] selects all values from array except for last item """

    #print('this is features:', features)

    df2 = client.get_dataframe(tickers=['NEOUSD', 'AMD'], metric_name='close',
                               startDate=start,
                               endDate=end)

    df2 = df2.dropna()

    print("this is df2 for regression", df2)

    df2 = df2.filter(['date', 'NEOUSD', 'AMD'], axis=1)

    print("this is df2- resized for regression", df2)

    df2 = df2.dropna()

    dependent_var = df2.iloc[:, -1].values.reshape(-1, 1)
    dependent_var2 = df2.iloc[:, -2].values.reshape(-1, 1)
    model = LinearRegression()
    model.fit(dependent_var2, dependent_var)

    rSquare = model.score(dependent_var2, dependent_var)

    print('Score for regression:', model.score(dependent_var2, dependent_var))

    y_pred = model.predict(dependent_var)

    print('this is y_pred', y_pred)

    return jsonify(dependent_var, y_pred, rSquare)


if __name__ == '__main__':
    app.run()


@app.route('/api/regressionTest')
def find_the_score3():
    """ reg_form = RegForm() """

    Dict = {'api_key': '880375d7add24b9d0bf1017ac7f7d5a0de10302b'}

    client = TiingoClient(Dict)

    tickerOne = 'MCHI'
    tickerTwo = 'CL'
    tickerThree = 'BTCUSD'
    tickerFour = 'ETHUSD'
    tickerFive = 'CORN'

    ticker_symbol_crypto = 'NEOUSD'
    #stocks=[ticker_symbol, ticker_symbol_2, ticker_symbol_crypto]
    start = '2021-05-05'
    end = str(date.today())

    if tickerTwo == "":
        stocks = [tickerOne,  'NEOUSD']

    elif tickerThree == "":
        stocks = [tickerOne, tickerTwo, 'NEOUSD']

    elif tickerFour == "":
        stocks = [tickerOne, tickerTwo, tickerThree, 'NEOUSD']

    elif tickerFive == "":
        stocks = [tickerOne, tickerTwo, tickerThree, tickerFour, 'NEOUSD']

    else:
        stocks = [tickerOne, tickerTwo, tickerThree,
                  tickerFour, tickerFive, 'NEOUSD']

    df2 = client.get_dataframe(tickers=stocks, metric_name='close',
                               startDate=start,
                               endDate=end)

    df2 = df2.dropna()

    df2 = df2.reset_index()
    # date is showing up as index but not counting or selectable as index

    # this should make date selectable

    print("this is df2 my friends!!!", df2)

    print('this is df2 column names', df2.columns.tolist())

    df2['index'] = df2['index'].astype(str)

    #df2 = df2.filter(['date', 'NEOUSD', 'AMD'], axis=1)

    #print("this is df2- resized", df2)

    #df2 = df2.dropna()

    dependent_var = df2.iloc[:, -1].values.reshape(-1, 1)
    # to pick multiple columns from a df, use [x,y,z] etc.
    print('this is dependent_var', dependent_var)

    dates = df2.iloc[:, 0].values.reshape(-1, 1)

    print('this is dates', dates)

    #independent_var = df2.iloc[:,[0, -2]].values.reshape(-1, 1)
    #print('this is independent_var', independent_var)
    #independent_var2 = df2.iloc[:, [0,3]].values.reshape(-1, 1)
    #print('this is independent_var2', independent_var2)

    featuresA = df2.iloc[:, [1, 2, 3]]
    # want all columns after date and before the independent variable
    print('this is featuresA', featuresA)

    featuresB = df2.iloc[:, [1, 3, 5]]
    # want all columns after date and before the independent variable
    print('this is featuresC', featuresB)

    featuresC = df2.iloc[:, [1, 4, 5]]
    # want all columns after date and before the independent variable
    print('this is featuresC', featuresC)

    featuresAll = df2.iloc[:, [1, 2, 3, 4, 5]]

    #singleFeature = df2.iloc[1]

    model = LinearRegression()
    model.fit(featuresA, dependent_var)
    print('Score!!!!!:', model.score(featuresA, dependent_var))

    rSquareA = model.score(featuresA, dependent_var)

    df_rSquareA = pd.DataFrame({"rSquareA": [rSquareA]})

    print('this is df_rSquareA', df_rSquareA)

    model.fit(featuresB, dependent_var)

    rSquareB = model.score(featuresB, dependent_var)

    df_rSquareB = pd.DataFrame({"rSquareB": [rSquareB]})

    print('this is df_rSquareB', df_rSquareB)

    model.fit(featuresC, dependent_var)

    rSquareC = model.score(featuresC, dependent_var)

    df_rSquareC = pd.DataFrame({"rSquareC": [rSquareC]})

    print('this is df_rSquareC', df_rSquareC)

    #y_pred = model.predict(features)

    #print('this is y_pred', y_pred)

    #df_y_pred = pd.DataFrame (y_pred, columns = ['y_pred'])

    #print('this is df_y_pred', df_y_pred)

    df_dates = pd.DataFrame(dates, columns=['dates'])

    print('this is df_dates', df_dates)

    print('this is featuresAll', featuresAll)

    df_features = pd.DataFrame(featuresAll, columns=['toDelete'])

    print('this is df_features', df_features)

    print('this is features.columns length', len(featuresAll.columns))

    """ i=0

    for i in range(len(features.columns)):
        df_features = df.features() """

    df_features = pd.merge(df_features, featuresAll,
                           left_index=True, right_index=True)

    # while i < len(features.columns):

    #    df_features = df_features.append(features[features.columns[i]])

    #    i = i+1

    df_features_dropped = df_features.drop(['toDelete'], axis=1)
    # Removes first (empty) column of df_features, which was added when initializing the df to begin with!
    # axis = 1 refers to columns, inplace refers to keeping same df!

    print('this is df_features_dropped', df_features_dropped)

    # This while loop creates a df with the individual rows and columns for each individual feature!

    df_dependent_var = pd.DataFrame(dependent_var, columns=['dependent_var'])

    print('this is df_dependent_var', df_dependent_var)

    prelim_df = pd.merge(df_features_dropped, df_dependent_var,
                         left_index=True, right_index=True)
    # if want to show dependent_var in chart, then unhighlight above!

    #prelim_df = pd.merge(df_features_dropped, left_index=True, right_index=True)

    print('this is prelim_df', prelim_df)

    #final_df = pd.merge(df_features_dropped, df_rSquare, left_index=True, right_index=True)

    #print('this is final_df', final_df)

    final_df_joinA = prelim_df.join(df_rSquareA)

    print('this is final_df_joinA', final_df_joinA)

    final_df_joinB = final_df_joinA.join(df_rSquareB)

    final_df_joinC = final_df_joinB.join(df_rSquareC)

    print('this is final_df_joinC', final_df_joinC)

    final_df_with_dates = final_df_joinC.join(df_dates)

    print('this is final_df_with_dates', final_df_with_dates)

    final_df_with_dates = final_df_with_dates.to_json()

    #print('this is final_df_with_dates- json', final_df_with_dates)

    return final_df_with_dates


if __name__ == '__main__':
    app.run()
