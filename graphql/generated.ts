import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Link" */
export type Link = {
  __typename?: 'Link';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Link" */
export type Link_Aggregate = {
  __typename?: 'Link_aggregate';
  aggregate?: Maybe<Link_Aggregate_Fields>;
  nodes: Array<Link>;
};

/** aggregate fields of "Link" */
export type Link_Aggregate_Fields = {
  __typename?: 'Link_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Link_Max_Fields>;
  min?: Maybe<Link_Min_Fields>;
};


/** aggregate fields of "Link" */
export type Link_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Link_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Link". All fields are combined with a logical 'AND'. */
export type Link_Bool_Exp = {
  _and?: InputMaybe<Array<Link_Bool_Exp>>;
  _not?: InputMaybe<Link_Bool_Exp>;
  _or?: InputMaybe<Array<Link_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Link" */
export enum Link_Constraint {
  /** unique or primary key constraint */
  LinkPkey = 'Link_pkey'
}

/** input type for inserting data into table "Link" */
export type Link_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Link_Max_Fields = {
  __typename?: 'Link_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Link_Min_Fields = {
  __typename?: 'Link_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Link" */
export type Link_Mutation_Response = {
  __typename?: 'Link_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Link>;
};

/** on_conflict condition type for table "Link" */
export type Link_On_Conflict = {
  constraint: Link_Constraint;
  update_columns?: Array<Link_Update_Column>;
  where?: InputMaybe<Link_Bool_Exp>;
};

/** Ordering options when selecting data from "Link". */
export type Link_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Link */
export type Link_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Link" */
export enum Link_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "Link" */
export type Link_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Link" */
export enum Link_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Url = 'url'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type Auth0_Profile = {
  __typename?: 'auth0_profile';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Auth0_Profile_Test = {
  __typename?: 'auth0_profile_test';
  email?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "buyOffers" */
export type BuyOffers = {
  __typename?: 'buyOffers';
  buy_offer_id: Scalars['String'];
  price?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "buyOffers" */
export type BuyOffers_Aggregate = {
  __typename?: 'buyOffers_aggregate';
  aggregate?: Maybe<BuyOffers_Aggregate_Fields>;
  nodes: Array<BuyOffers>;
};

/** aggregate fields of "buyOffers" */
export type BuyOffers_Aggregate_Fields = {
  __typename?: 'buyOffers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<BuyOffers_Max_Fields>;
  min?: Maybe<BuyOffers_Min_Fields>;
};


/** aggregate fields of "buyOffers" */
export type BuyOffers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<BuyOffers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "buyOffers". All fields are combined with a logical 'AND'. */
export type BuyOffers_Bool_Exp = {
  _and?: InputMaybe<Array<BuyOffers_Bool_Exp>>;
  _not?: InputMaybe<BuyOffers_Bool_Exp>;
  _or?: InputMaybe<Array<BuyOffers_Bool_Exp>>;
  buy_offer_id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "buyOffers" */
export enum BuyOffers_Constraint {
  /** unique or primary key constraint */
  BuyOffersPkey = 'buyOffers_pkey'
}

/** input type for inserting data into table "buyOffers" */
export type BuyOffers_Insert_Input = {
  buy_offer_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type BuyOffers_Max_Fields = {
  __typename?: 'buyOffers_max_fields';
  buy_offer_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type BuyOffers_Min_Fields = {
  __typename?: 'buyOffers_min_fields';
  buy_offer_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "buyOffers" */
export type BuyOffers_Mutation_Response = {
  __typename?: 'buyOffers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BuyOffers>;
};

/** on_conflict condition type for table "buyOffers" */
export type BuyOffers_On_Conflict = {
  constraint: BuyOffers_Constraint;
  update_columns?: Array<BuyOffers_Update_Column>;
  where?: InputMaybe<BuyOffers_Bool_Exp>;
};

/** Ordering options when selecting data from "buyOffers". */
export type BuyOffers_Order_By = {
  buy_offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: buyOffers */
export type BuyOffers_Pk_Columns_Input = {
  buy_offer_id: Scalars['String'];
};

/** select columns of table "buyOffers" */
export enum BuyOffers_Select_Column {
  /** column name */
  BuyOfferId = 'buy_offer_id',
  /** column name */
  Price = 'price',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "buyOffers" */
export type BuyOffers_Set_Input = {
  buy_offer_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "buyOffers" */
export enum BuyOffers_Update_Column {
  /** column name */
  BuyOfferId = 'buy_offer_id',
  /** column name */
  Price = 'price',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "buy_offers" */
export type Buy_Offers = {
  __typename?: 'buy_offers';
  buy_offer_id: Scalars['String'];
  headline?: Maybe<Scalars['String']>;
  industry: Scalars['String'];
  offer_details?: Maybe<Scalars['String']>;
  offer_type?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "buy_offers" */
export type Buy_Offers_Aggregate = {
  __typename?: 'buy_offers_aggregate';
  aggregate?: Maybe<Buy_Offers_Aggregate_Fields>;
  nodes: Array<Buy_Offers>;
};

/** aggregate fields of "buy_offers" */
export type Buy_Offers_Aggregate_Fields = {
  __typename?: 'buy_offers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Buy_Offers_Max_Fields>;
  min?: Maybe<Buy_Offers_Min_Fields>;
};


/** aggregate fields of "buy_offers" */
export type Buy_Offers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buy_Offers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "buy_offers" */
export type Buy_Offers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Buy_Offers_Max_Order_By>;
  min?: InputMaybe<Buy_Offers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "buy_offers" */
export type Buy_Offers_Arr_Rel_Insert_Input = {
  data: Array<Buy_Offers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Buy_Offers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "buy_offers". All fields are combined with a logical 'AND'. */
export type Buy_Offers_Bool_Exp = {
  _and?: InputMaybe<Array<Buy_Offers_Bool_Exp>>;
  _not?: InputMaybe<Buy_Offers_Bool_Exp>;
  _or?: InputMaybe<Array<Buy_Offers_Bool_Exp>>;
  buy_offer_id?: InputMaybe<String_Comparison_Exp>;
  headline?: InputMaybe<String_Comparison_Exp>;
  industry?: InputMaybe<String_Comparison_Exp>;
  offer_details?: InputMaybe<String_Comparison_Exp>;
  offer_type?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  qualifications?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "buy_offers" */
export enum Buy_Offers_Constraint {
  /** unique or primary key constraint */
  BuyOffersPkey = 'buy_offers_pkey'
}

/** input type for inserting data into table "buy_offers" */
export type Buy_Offers_Insert_Input = {
  buy_offer_id?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  industry?: InputMaybe<Scalars['String']>;
  offer_details?: InputMaybe<Scalars['String']>;
  offer_type?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  qualifications?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Buy_Offers_Max_Fields = {
  __typename?: 'buy_offers_max_fields';
  buy_offer_id?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  offer_details?: Maybe<Scalars['String']>;
  offer_type?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "buy_offers" */
export type Buy_Offers_Max_Order_By = {
  buy_offer_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  offer_details?: InputMaybe<Order_By>;
  offer_type?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  qualifications?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Buy_Offers_Min_Fields = {
  __typename?: 'buy_offers_min_fields';
  buy_offer_id?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  offer_details?: Maybe<Scalars['String']>;
  offer_type?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "buy_offers" */
export type Buy_Offers_Min_Order_By = {
  buy_offer_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  offer_details?: InputMaybe<Order_By>;
  offer_type?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  qualifications?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "buy_offers" */
export type Buy_Offers_Mutation_Response = {
  __typename?: 'buy_offers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buy_Offers>;
};

/** on_conflict condition type for table "buy_offers" */
export type Buy_Offers_On_Conflict = {
  constraint: Buy_Offers_Constraint;
  update_columns?: Array<Buy_Offers_Update_Column>;
  where?: InputMaybe<Buy_Offers_Bool_Exp>;
};

/** Ordering options when selecting data from "buy_offers". */
export type Buy_Offers_Order_By = {
  buy_offer_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  offer_details?: InputMaybe<Order_By>;
  offer_type?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  qualifications?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: buy_offers */
export type Buy_Offers_Pk_Columns_Input = {
  buy_offer_id: Scalars['String'];
};

/** select columns of table "buy_offers" */
export enum Buy_Offers_Select_Column {
  /** column name */
  BuyOfferId = 'buy_offer_id',
  /** column name */
  Headline = 'headline',
  /** column name */
  Industry = 'industry',
  /** column name */
  OfferDetails = 'offer_details',
  /** column name */
  OfferType = 'offer_type',
  /** column name */
  Price = 'price',
  /** column name */
  Qualifications = 'qualifications',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "buy_offers" */
export type Buy_Offers_Set_Input = {
  buy_offer_id?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  industry?: InputMaybe<Scalars['String']>;
  offer_details?: InputMaybe<Scalars['String']>;
  offer_type?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  qualifications?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "buy_offers" */
export enum Buy_Offers_Update_Column {
  /** column name */
  BuyOfferId = 'buy_offer_id',
  /** column name */
  Headline = 'headline',
  /** column name */
  Industry = 'industry',
  /** column name */
  OfferDetails = 'offer_details',
  /** column name */
  OfferType = 'offer_type',
  /** column name */
  Price = 'price',
  /** column name */
  Qualifications = 'qualifications',
  /** column name */
  UserId = 'user_id'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Link" */
  delete_Link?: Maybe<Link_Mutation_Response>;
  /** delete single row from the table: "Link" */
  delete_Link_by_pk?: Maybe<Link>;
  /** delete data from the table: "buyOffers" */
  delete_buyOffers?: Maybe<BuyOffers_Mutation_Response>;
  /** delete single row from the table: "buyOffers" */
  delete_buyOffers_by_pk?: Maybe<BuyOffers>;
  /** delete data from the table: "buy_offers" */
  delete_buy_offers?: Maybe<Buy_Offers_Mutation_Response>;
  /** delete single row from the table: "buy_offers" */
  delete_buy_offers_by_pk?: Maybe<Buy_Offers>;
  /** delete data from the table: "online_users" */
  delete_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** delete data from the table: "reviews" */
  delete_reviews?: Maybe<Reviews_Mutation_Response>;
  /** delete single row from the table: "reviews" */
  delete_reviews_by_pk?: Maybe<Reviews>;
  /** delete data from the table: "sell_offers" */
  delete_sell_offers?: Maybe<Sell_Offers_Mutation_Response>;
  /** delete single row from the table: "sell_offers" */
  delete_sell_offers_by_pk?: Maybe<Sell_Offers>;
  /** delete data from the table: "test_table" */
  delete_test_table?: Maybe<Test_Table_Mutation_Response>;
  /** delete single row from the table: "test_table" */
  delete_test_table_by_pk?: Maybe<Test_Table>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "Link" */
  insert_Link?: Maybe<Link_Mutation_Response>;
  /** insert a single row into the table: "Link" */
  insert_Link_one?: Maybe<Link>;
  /** insert data into the table: "buyOffers" */
  insert_buyOffers?: Maybe<BuyOffers_Mutation_Response>;
  /** insert a single row into the table: "buyOffers" */
  insert_buyOffers_one?: Maybe<BuyOffers>;
  /** insert data into the table: "buy_offers" */
  insert_buy_offers?: Maybe<Buy_Offers_Mutation_Response>;
  /** insert a single row into the table: "buy_offers" */
  insert_buy_offers_one?: Maybe<Buy_Offers>;
  /** insert data into the table: "online_users" */
  insert_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** insert a single row into the table: "online_users" */
  insert_online_users_one?: Maybe<Online_Users>;
  /** insert data into the table: "reviews" */
  insert_reviews?: Maybe<Reviews_Mutation_Response>;
  /** insert a single row into the table: "reviews" */
  insert_reviews_one?: Maybe<Reviews>;
  /** insert data into the table: "sell_offers" */
  insert_sell_offers?: Maybe<Sell_Offers_Mutation_Response>;
  /** insert a single row into the table: "sell_offers" */
  insert_sell_offers_one?: Maybe<Sell_Offers>;
  /** insert data into the table: "test_table" */
  insert_test_table?: Maybe<Test_Table_Mutation_Response>;
  /** insert a single row into the table: "test_table" */
  insert_test_table_one?: Maybe<Test_Table>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "Link" */
  update_Link?: Maybe<Link_Mutation_Response>;
  /** update single row of the table: "Link" */
  update_Link_by_pk?: Maybe<Link>;
  /** update data of the table: "buyOffers" */
  update_buyOffers?: Maybe<BuyOffers_Mutation_Response>;
  /** update single row of the table: "buyOffers" */
  update_buyOffers_by_pk?: Maybe<BuyOffers>;
  /** update data of the table: "buy_offers" */
  update_buy_offers?: Maybe<Buy_Offers_Mutation_Response>;
  /** update single row of the table: "buy_offers" */
  update_buy_offers_by_pk?: Maybe<Buy_Offers>;
  /** update data of the table: "online_users" */
  update_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** update data of the table: "reviews" */
  update_reviews?: Maybe<Reviews_Mutation_Response>;
  /** update single row of the table: "reviews" */
  update_reviews_by_pk?: Maybe<Reviews>;
  /** update data of the table: "sell_offers" */
  update_sell_offers?: Maybe<Sell_Offers_Mutation_Response>;
  /** update single row of the table: "sell_offers" */
  update_sell_offers_by_pk?: Maybe<Sell_Offers>;
  /** update data of the table: "test_table" */
  update_test_table?: Maybe<Test_Table_Mutation_Response>;
  /** update single row of the table: "test_table" */
  update_test_table_by_pk?: Maybe<Test_Table>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_LinkArgs = {
  where: Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Link_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_BuyOffersArgs = {
  where: BuyOffers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BuyOffers_By_PkArgs = {
  buy_offer_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Buy_OffersArgs = {
  where: Buy_Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Buy_Offers_By_PkArgs = {
  buy_offer_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Online_UsersArgs = {
  where: Online_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ReviewsArgs = {
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reviews_By_PkArgs = {
  review_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Sell_OffersArgs = {
  where: Sell_Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sell_Offers_By_PkArgs = {
  sell_offer_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Test_TableArgs = {
  where: Test_Table_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_Table_By_PkArgs = {
  test: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_LinkArgs = {
  objects: Array<Link_Insert_Input>;
  on_conflict?: InputMaybe<Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Link_OneArgs = {
  object: Link_Insert_Input;
  on_conflict?: InputMaybe<Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BuyOffersArgs = {
  objects: Array<BuyOffers_Insert_Input>;
  on_conflict?: InputMaybe<BuyOffers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BuyOffers_OneArgs = {
  object: BuyOffers_Insert_Input;
  on_conflict?: InputMaybe<BuyOffers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Buy_OffersArgs = {
  objects: Array<Buy_Offers_Insert_Input>;
  on_conflict?: InputMaybe<Buy_Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Buy_Offers_OneArgs = {
  object: Buy_Offers_Insert_Input;
  on_conflict?: InputMaybe<Buy_Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Online_UsersArgs = {
  objects: Array<Online_Users_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Online_Users_OneArgs = {
  object: Online_Users_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ReviewsArgs = {
  objects: Array<Reviews_Insert_Input>;
  on_conflict?: InputMaybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reviews_OneArgs = {
  object: Reviews_Insert_Input;
  on_conflict?: InputMaybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sell_OffersArgs = {
  objects: Array<Sell_Offers_Insert_Input>;
  on_conflict?: InputMaybe<Sell_Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sell_Offers_OneArgs = {
  object: Sell_Offers_Insert_Input;
  on_conflict?: InputMaybe<Sell_Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_TableArgs = {
  objects: Array<Test_Table_Insert_Input>;
  on_conflict?: InputMaybe<Test_Table_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Table_OneArgs = {
  object: Test_Table_Insert_Input;
  on_conflict?: InputMaybe<Test_Table_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_LinkArgs = {
  _set?: InputMaybe<Link_Set_Input>;
  where: Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Link_By_PkArgs = {
  _set?: InputMaybe<Link_Set_Input>;
  pk_columns: Link_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BuyOffersArgs = {
  _set?: InputMaybe<BuyOffers_Set_Input>;
  where: BuyOffers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_BuyOffers_By_PkArgs = {
  _set?: InputMaybe<BuyOffers_Set_Input>;
  pk_columns: BuyOffers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Buy_OffersArgs = {
  _set?: InputMaybe<Buy_Offers_Set_Input>;
  where: Buy_Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Buy_Offers_By_PkArgs = {
  _set?: InputMaybe<Buy_Offers_Set_Input>;
  pk_columns: Buy_Offers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Online_UsersArgs = {
  _set?: InputMaybe<Online_Users_Set_Input>;
  where: Online_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewsArgs = {
  _inc?: InputMaybe<Reviews_Inc_Input>;
  _set?: InputMaybe<Reviews_Set_Input>;
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reviews_By_PkArgs = {
  _inc?: InputMaybe<Reviews_Inc_Input>;
  _set?: InputMaybe<Reviews_Set_Input>;
  pk_columns: Reviews_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sell_OffersArgs = {
  _inc?: InputMaybe<Sell_Offers_Inc_Input>;
  _set?: InputMaybe<Sell_Offers_Set_Input>;
  where: Sell_Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sell_Offers_By_PkArgs = {
  _inc?: InputMaybe<Sell_Offers_Inc_Input>;
  _set?: InputMaybe<Sell_Offers_Set_Input>;
  pk_columns: Sell_Offers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_TableArgs = {
  _set?: InputMaybe<Test_Table_Set_Input>;
  where: Test_Table_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Table_By_PkArgs = {
  _set?: InputMaybe<Test_Table_Set_Input>;
  pk_columns: Test_Table_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: InputMaybe<Todos_Inc_Input>;
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: InputMaybe<Todos_Inc_Input>;
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "online_users" */
export type Online_Users = {
  __typename?: 'online_users';
  first_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "online_users" */
export type Online_Users_Aggregate = {
  __typename?: 'online_users_aggregate';
  aggregate?: Maybe<Online_Users_Aggregate_Fields>;
  nodes: Array<Online_Users>;
};

/** aggregate fields of "online_users" */
export type Online_Users_Aggregate_Fields = {
  __typename?: 'online_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Online_Users_Max_Fields>;
  min?: Maybe<Online_Users_Min_Fields>;
};


/** aggregate fields of "online_users" */
export type Online_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Online_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type Online_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Online_Users_Bool_Exp>>;
  _not?: InputMaybe<Online_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Online_Users_Bool_Exp>>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** input type for inserting data into table "online_users" */
export type Online_Users_Insert_Input = {
  first_name?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Online_Users_Max_Fields = {
  __typename?: 'online_users_max_fields';
  first_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Online_Users_Min_Fields = {
  __typename?: 'online_users_min_fields';
  first_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "online_users" */
export type Online_Users_Mutation_Response = {
  __typename?: 'online_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Online_Users>;
};

/** Ordering options when selecting data from "online_users". */
export type Online_Users_Order_By = {
  first_name?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
};

/** select columns of table "online_users" */
export enum Online_Users_Select_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastSeen = 'last_seen'
}

/** input type for updating data in table "online_users" */
export type Online_Users_Set_Input = {
  first_name?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Link" */
  Link: Array<Link>;
  /** fetch aggregated fields from the table: "Link" */
  Link_aggregate: Link_Aggregate;
  /** fetch data from the table: "Link" using primary key columns */
  Link_by_pk?: Maybe<Link>;
  auth0?: Maybe<Auth0_Profile>;
  auth01?: Maybe<Auth0_Profile_Test>;
  /** fetch data from the table: "buyOffers" */
  buyOffers: Array<BuyOffers>;
  /** fetch aggregated fields from the table: "buyOffers" */
  buyOffers_aggregate: BuyOffers_Aggregate;
  /** fetch data from the table: "buyOffers" using primary key columns */
  buyOffers_by_pk?: Maybe<BuyOffers>;
  /** An array relationship */
  buy_offers: Array<Buy_Offers>;
  /** An aggregate relationship */
  buy_offers_aggregate: Buy_Offers_Aggregate;
  /** fetch data from the table: "buy_offers" using primary key columns */
  buy_offers_by_pk?: Maybe<Buy_Offers>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: Online_Users_Aggregate;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** An array relationship */
  sell_offers: Array<Sell_Offers>;
  /** An aggregate relationship */
  sell_offers_aggregate: Sell_Offers_Aggregate;
  /** fetch data from the table: "sell_offers" using primary key columns */
  sell_offers_by_pk?: Maybe<Sell_Offers>;
  /** fetch data from the table: "test_table" */
  test_table: Array<Test_Table>;
  /** fetch aggregated fields from the table: "test_table" */
  test_table_aggregate: Test_Table_Aggregate;
  /** fetch data from the table: "test_table" using primary key columns */
  test_table_by_pk?: Maybe<Test_Table>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootLinkArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


export type Query_RootLink_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


export type Query_RootLink_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBuyOffersArgs = {
  distinct_on?: InputMaybe<Array<BuyOffers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BuyOffers_Order_By>>;
  where?: InputMaybe<BuyOffers_Bool_Exp>;
};


export type Query_RootBuyOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BuyOffers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BuyOffers_Order_By>>;
  where?: InputMaybe<BuyOffers_Bool_Exp>;
};


export type Query_RootBuyOffers_By_PkArgs = {
  buy_offer_id: Scalars['String'];
};


export type Query_RootBuy_OffersArgs = {
  distinct_on?: InputMaybe<Array<Buy_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buy_Offers_Order_By>>;
  where?: InputMaybe<Buy_Offers_Bool_Exp>;
};


export type Query_RootBuy_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buy_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buy_Offers_Order_By>>;
  where?: InputMaybe<Buy_Offers_Bool_Exp>;
};


export type Query_RootBuy_Offers_By_PkArgs = {
  buy_offer_id: Scalars['String'];
};


export type Query_RootOnline_UsersArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Query_RootOnline_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Query_RootReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Query_RootReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Query_RootReviews_By_PkArgs = {
  review_id: Scalars['Int'];
};


export type Query_RootSell_OffersArgs = {
  distinct_on?: InputMaybe<Array<Sell_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sell_Offers_Order_By>>;
  where?: InputMaybe<Sell_Offers_Bool_Exp>;
};


export type Query_RootSell_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sell_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sell_Offers_Order_By>>;
  where?: InputMaybe<Sell_Offers_Bool_Exp>;
};


export type Query_RootSell_Offers_By_PkArgs = {
  sell_offer_id: Scalars['Int'];
};


export type Query_RootTest_TableArgs = {
  distinct_on?: InputMaybe<Array<Test_Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Table_Order_By>>;
  where?: InputMaybe<Test_Table_Bool_Exp>;
};


export type Query_RootTest_Table_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Table_Order_By>>;
  where?: InputMaybe<Test_Table_Bool_Exp>;
};


export type Query_RootTest_Table_By_PkArgs = {
  test: Scalars['String'];
};


export type Query_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  user_id: Scalars['String'];
};

/** columns and relationships of "reviews" */
export type Reviews = {
  __typename?: 'reviews';
  content?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  rating?: Maybe<Scalars['float8']>;
  review_id: Scalars['Int'];
  reviewer_id?: Maybe<Scalars['String']>;
  user_id: Scalars['String'];
};

/** aggregated selection of "reviews" */
export type Reviews_Aggregate = {
  __typename?: 'reviews_aggregate';
  aggregate?: Maybe<Reviews_Aggregate_Fields>;
  nodes: Array<Reviews>;
};

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_Fields = {
  __typename?: 'reviews_aggregate_fields';
  avg?: Maybe<Reviews_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Reviews_Max_Fields>;
  min?: Maybe<Reviews_Min_Fields>;
  stddev?: Maybe<Reviews_Stddev_Fields>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Fields>;
  sum?: Maybe<Reviews_Sum_Fields>;
  var_pop?: Maybe<Reviews_Var_Pop_Fields>;
  var_samp?: Maybe<Reviews_Var_Samp_Fields>;
  variance?: Maybe<Reviews_Variance_Fields>;
};


/** aggregate fields of "reviews" */
export type Reviews_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reviews_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reviews" */
export type Reviews_Aggregate_Order_By = {
  avg?: InputMaybe<Reviews_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reviews_Max_Order_By>;
  min?: InputMaybe<Reviews_Min_Order_By>;
  stddev?: InputMaybe<Reviews_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reviews_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reviews_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reviews_Sum_Order_By>;
  var_pop?: InputMaybe<Reviews_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reviews_Var_Samp_Order_By>;
  variance?: InputMaybe<Reviews_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reviews" */
export type Reviews_Arr_Rel_Insert_Input = {
  data: Array<Reviews_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reviews_On_Conflict>;
};

/** aggregate avg on columns */
export type Reviews_Avg_Fields = {
  __typename?: 'reviews_avg_fields';
  rating?: Maybe<Scalars['Float']>;
  review_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reviews" */
export type Reviews_Avg_Order_By = {
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reviews". All fields are combined with a logical 'AND'. */
export type Reviews_Bool_Exp = {
  _and?: InputMaybe<Array<Reviews_Bool_Exp>>;
  _not?: InputMaybe<Reviews_Bool_Exp>;
  _or?: InputMaybe<Array<Reviews_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  date_created?: InputMaybe<Timestamptz_Comparison_Exp>;
  rating?: InputMaybe<Float8_Comparison_Exp>;
  review_id?: InputMaybe<Int_Comparison_Exp>;
  reviewer_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reviews" */
export enum Reviews_Constraint {
  /** unique or primary key constraint */
  ReviewsPkey = 'reviews_pkey'
}

/** input type for incrementing numeric columns in table "reviews" */
export type Reviews_Inc_Input = {
  rating?: InputMaybe<Scalars['float8']>;
  review_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "reviews" */
export type Reviews_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['timestamptz']>;
  rating?: InputMaybe<Scalars['float8']>;
  review_id?: InputMaybe<Scalars['Int']>;
  reviewer_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Reviews_Max_Fields = {
  __typename?: 'reviews_max_fields';
  content?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  rating?: Maybe<Scalars['float8']>;
  review_id?: Maybe<Scalars['Int']>;
  reviewer_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reviews" */
export type Reviews_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  date_created?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
  reviewer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reviews_Min_Fields = {
  __typename?: 'reviews_min_fields';
  content?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  rating?: Maybe<Scalars['float8']>;
  review_id?: Maybe<Scalars['Int']>;
  reviewer_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reviews" */
export type Reviews_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  date_created?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
  reviewer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reviews" */
export type Reviews_Mutation_Response = {
  __typename?: 'reviews_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Reviews>;
};

/** on_conflict condition type for table "reviews" */
export type Reviews_On_Conflict = {
  constraint: Reviews_Constraint;
  update_columns?: Array<Reviews_Update_Column>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};

/** Ordering options when selecting data from "reviews". */
export type Reviews_Order_By = {
  content?: InputMaybe<Order_By>;
  date_created?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
  reviewer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reviews */
export type Reviews_Pk_Columns_Input = {
  review_id: Scalars['Int'];
};

/** select columns of table "reviews" */
export enum Reviews_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Rating = 'rating',
  /** column name */
  ReviewId = 'review_id',
  /** column name */
  ReviewerId = 'reviewer_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "reviews" */
export type Reviews_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['timestamptz']>;
  rating?: InputMaybe<Scalars['float8']>;
  review_id?: InputMaybe<Scalars['Int']>;
  reviewer_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Reviews_Stddev_Fields = {
  __typename?: 'reviews_stddev_fields';
  rating?: Maybe<Scalars['Float']>;
  review_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reviews" */
export type Reviews_Stddev_Order_By = {
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reviews_Stddev_Pop_Fields = {
  __typename?: 'reviews_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']>;
  review_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reviews" */
export type Reviews_Stddev_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reviews_Stddev_Samp_Fields = {
  __typename?: 'reviews_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']>;
  review_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reviews" */
export type Reviews_Stddev_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Reviews_Sum_Fields = {
  __typename?: 'reviews_sum_fields';
  rating?: Maybe<Scalars['float8']>;
  review_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "reviews" */
export type Reviews_Sum_Order_By = {
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** update columns of table "reviews" */
export enum Reviews_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Rating = 'rating',
  /** column name */
  ReviewId = 'review_id',
  /** column name */
  ReviewerId = 'reviewer_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Reviews_Var_Pop_Fields = {
  __typename?: 'reviews_var_pop_fields';
  rating?: Maybe<Scalars['Float']>;
  review_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reviews" */
export type Reviews_Var_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reviews_Var_Samp_Fields = {
  __typename?: 'reviews_var_samp_fields';
  rating?: Maybe<Scalars['Float']>;
  review_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reviews" */
export type Reviews_Var_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reviews_Variance_Fields = {
  __typename?: 'reviews_variance_fields';
  rating?: Maybe<Scalars['Float']>;
  review_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reviews" */
export type Reviews_Variance_Order_By = {
  rating?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "sell_offers" */
export type Sell_Offers = {
  __typename?: 'sell_offers';
  headline?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  offer_details?: Maybe<Scalars['String']>;
  offer_type?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  rate_type?: Maybe<Scalars['String']>;
  sell_offer_id: Scalars['Int'];
  target_audience?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "sell_offers" */
export type Sell_Offers_Aggregate = {
  __typename?: 'sell_offers_aggregate';
  aggregate?: Maybe<Sell_Offers_Aggregate_Fields>;
  nodes: Array<Sell_Offers>;
};

/** aggregate fields of "sell_offers" */
export type Sell_Offers_Aggregate_Fields = {
  __typename?: 'sell_offers_aggregate_fields';
  avg?: Maybe<Sell_Offers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sell_Offers_Max_Fields>;
  min?: Maybe<Sell_Offers_Min_Fields>;
  stddev?: Maybe<Sell_Offers_Stddev_Fields>;
  stddev_pop?: Maybe<Sell_Offers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sell_Offers_Stddev_Samp_Fields>;
  sum?: Maybe<Sell_Offers_Sum_Fields>;
  var_pop?: Maybe<Sell_Offers_Var_Pop_Fields>;
  var_samp?: Maybe<Sell_Offers_Var_Samp_Fields>;
  variance?: Maybe<Sell_Offers_Variance_Fields>;
};


/** aggregate fields of "sell_offers" */
export type Sell_Offers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sell_Offers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sell_offers" */
export type Sell_Offers_Aggregate_Order_By = {
  avg?: InputMaybe<Sell_Offers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sell_Offers_Max_Order_By>;
  min?: InputMaybe<Sell_Offers_Min_Order_By>;
  stddev?: InputMaybe<Sell_Offers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Sell_Offers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Sell_Offers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Sell_Offers_Sum_Order_By>;
  var_pop?: InputMaybe<Sell_Offers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Sell_Offers_Var_Samp_Order_By>;
  variance?: InputMaybe<Sell_Offers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sell_offers" */
export type Sell_Offers_Arr_Rel_Insert_Input = {
  data: Array<Sell_Offers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sell_Offers_On_Conflict>;
};

/** aggregate avg on columns */
export type Sell_Offers_Avg_Fields = {
  __typename?: 'sell_offers_avg_fields';
  sell_offer_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sell_offers" */
export type Sell_Offers_Avg_Order_By = {
  sell_offer_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sell_offers". All fields are combined with a logical 'AND'. */
export type Sell_Offers_Bool_Exp = {
  _and?: InputMaybe<Array<Sell_Offers_Bool_Exp>>;
  _not?: InputMaybe<Sell_Offers_Bool_Exp>;
  _or?: InputMaybe<Array<Sell_Offers_Bool_Exp>>;
  headline?: InputMaybe<String_Comparison_Exp>;
  industry?: InputMaybe<String_Comparison_Exp>;
  offer_details?: InputMaybe<String_Comparison_Exp>;
  offer_type?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  qualifications?: InputMaybe<String_Comparison_Exp>;
  rate_type?: InputMaybe<String_Comparison_Exp>;
  sell_offer_id?: InputMaybe<Int_Comparison_Exp>;
  target_audience?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sell_offers" */
export enum Sell_Offers_Constraint {
  /** unique or primary key constraint */
  SellOffersPkey = 'sell_offers_pkey',
  /** unique or primary key constraint */
  SellOffersSellOfferIdKey = 'sell_offers_sell_offer_id_key'
}

/** input type for incrementing numeric columns in table "sell_offers" */
export type Sell_Offers_Inc_Input = {
  sell_offer_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "sell_offers" */
export type Sell_Offers_Insert_Input = {
  headline?: InputMaybe<Scalars['String']>;
  industry?: InputMaybe<Scalars['String']>;
  offer_details?: InputMaybe<Scalars['String']>;
  offer_type?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  qualifications?: InputMaybe<Scalars['String']>;
  rate_type?: InputMaybe<Scalars['String']>;
  sell_offer_id?: InputMaybe<Scalars['Int']>;
  target_audience?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sell_Offers_Max_Fields = {
  __typename?: 'sell_offers_max_fields';
  headline?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  offer_details?: Maybe<Scalars['String']>;
  offer_type?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  rate_type?: Maybe<Scalars['String']>;
  sell_offer_id?: Maybe<Scalars['Int']>;
  target_audience?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "sell_offers" */
export type Sell_Offers_Max_Order_By = {
  headline?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  offer_details?: InputMaybe<Order_By>;
  offer_type?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  qualifications?: InputMaybe<Order_By>;
  rate_type?: InputMaybe<Order_By>;
  sell_offer_id?: InputMaybe<Order_By>;
  target_audience?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sell_Offers_Min_Fields = {
  __typename?: 'sell_offers_min_fields';
  headline?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  offer_details?: Maybe<Scalars['String']>;
  offer_type?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  rate_type?: Maybe<Scalars['String']>;
  sell_offer_id?: Maybe<Scalars['Int']>;
  target_audience?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "sell_offers" */
export type Sell_Offers_Min_Order_By = {
  headline?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  offer_details?: InputMaybe<Order_By>;
  offer_type?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  qualifications?: InputMaybe<Order_By>;
  rate_type?: InputMaybe<Order_By>;
  sell_offer_id?: InputMaybe<Order_By>;
  target_audience?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sell_offers" */
export type Sell_Offers_Mutation_Response = {
  __typename?: 'sell_offers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sell_Offers>;
};

/** on_conflict condition type for table "sell_offers" */
export type Sell_Offers_On_Conflict = {
  constraint: Sell_Offers_Constraint;
  update_columns?: Array<Sell_Offers_Update_Column>;
  where?: InputMaybe<Sell_Offers_Bool_Exp>;
};

/** Ordering options when selecting data from "sell_offers". */
export type Sell_Offers_Order_By = {
  headline?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  offer_details?: InputMaybe<Order_By>;
  offer_type?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  qualifications?: InputMaybe<Order_By>;
  rate_type?: InputMaybe<Order_By>;
  sell_offer_id?: InputMaybe<Order_By>;
  target_audience?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sell_offers */
export type Sell_Offers_Pk_Columns_Input = {
  sell_offer_id: Scalars['Int'];
};

/** select columns of table "sell_offers" */
export enum Sell_Offers_Select_Column {
  /** column name */
  Headline = 'headline',
  /** column name */
  Industry = 'industry',
  /** column name */
  OfferDetails = 'offer_details',
  /** column name */
  OfferType = 'offer_type',
  /** column name */
  Price = 'price',
  /** column name */
  Qualifications = 'qualifications',
  /** column name */
  RateType = 'rate_type',
  /** column name */
  SellOfferId = 'sell_offer_id',
  /** column name */
  TargetAudience = 'target_audience',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "sell_offers" */
export type Sell_Offers_Set_Input = {
  headline?: InputMaybe<Scalars['String']>;
  industry?: InputMaybe<Scalars['String']>;
  offer_details?: InputMaybe<Scalars['String']>;
  offer_type?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  qualifications?: InputMaybe<Scalars['String']>;
  rate_type?: InputMaybe<Scalars['String']>;
  sell_offer_id?: InputMaybe<Scalars['Int']>;
  target_audience?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Sell_Offers_Stddev_Fields = {
  __typename?: 'sell_offers_stddev_fields';
  sell_offer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sell_offers" */
export type Sell_Offers_Stddev_Order_By = {
  sell_offer_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sell_Offers_Stddev_Pop_Fields = {
  __typename?: 'sell_offers_stddev_pop_fields';
  sell_offer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sell_offers" */
export type Sell_Offers_Stddev_Pop_Order_By = {
  sell_offer_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sell_Offers_Stddev_Samp_Fields = {
  __typename?: 'sell_offers_stddev_samp_fields';
  sell_offer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sell_offers" */
export type Sell_Offers_Stddev_Samp_Order_By = {
  sell_offer_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Sell_Offers_Sum_Fields = {
  __typename?: 'sell_offers_sum_fields';
  sell_offer_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "sell_offers" */
export type Sell_Offers_Sum_Order_By = {
  sell_offer_id?: InputMaybe<Order_By>;
};

/** update columns of table "sell_offers" */
export enum Sell_Offers_Update_Column {
  /** column name */
  Headline = 'headline',
  /** column name */
  Industry = 'industry',
  /** column name */
  OfferDetails = 'offer_details',
  /** column name */
  OfferType = 'offer_type',
  /** column name */
  Price = 'price',
  /** column name */
  Qualifications = 'qualifications',
  /** column name */
  RateType = 'rate_type',
  /** column name */
  SellOfferId = 'sell_offer_id',
  /** column name */
  TargetAudience = 'target_audience',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Sell_Offers_Var_Pop_Fields = {
  __typename?: 'sell_offers_var_pop_fields';
  sell_offer_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sell_offers" */
export type Sell_Offers_Var_Pop_Order_By = {
  sell_offer_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sell_Offers_Var_Samp_Fields = {
  __typename?: 'sell_offers_var_samp_fields';
  sell_offer_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sell_offers" */
export type Sell_Offers_Var_Samp_Order_By = {
  sell_offer_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Sell_Offers_Variance_Fields = {
  __typename?: 'sell_offers_variance_fields';
  sell_offer_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sell_offers" */
export type Sell_Offers_Variance_Order_By = {
  sell_offer_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Link" */
  Link: Array<Link>;
  /** fetch aggregated fields from the table: "Link" */
  Link_aggregate: Link_Aggregate;
  /** fetch data from the table: "Link" using primary key columns */
  Link_by_pk?: Maybe<Link>;
  /** fetch data from the table: "buyOffers" */
  buyOffers: Array<BuyOffers>;
  /** fetch aggregated fields from the table: "buyOffers" */
  buyOffers_aggregate: BuyOffers_Aggregate;
  /** fetch data from the table: "buyOffers" using primary key columns */
  buyOffers_by_pk?: Maybe<BuyOffers>;
  /** An array relationship */
  buy_offers: Array<Buy_Offers>;
  /** An aggregate relationship */
  buy_offers_aggregate: Buy_Offers_Aggregate;
  /** fetch data from the table: "buy_offers" using primary key columns */
  buy_offers_by_pk?: Maybe<Buy_Offers>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: Online_Users_Aggregate;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** An array relationship */
  sell_offers: Array<Sell_Offers>;
  /** An aggregate relationship */
  sell_offers_aggregate: Sell_Offers_Aggregate;
  /** fetch data from the table: "sell_offers" using primary key columns */
  sell_offers_by_pk?: Maybe<Sell_Offers>;
  /** fetch data from the table: "test_table" */
  test_table: Array<Test_Table>;
  /** fetch aggregated fields from the table: "test_table" */
  test_table_aggregate: Test_Table_Aggregate;
  /** fetch data from the table: "test_table" using primary key columns */
  test_table_by_pk?: Maybe<Test_Table>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootLinkArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


export type Subscription_RootLink_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


export type Subscription_RootLink_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBuyOffersArgs = {
  distinct_on?: InputMaybe<Array<BuyOffers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BuyOffers_Order_By>>;
  where?: InputMaybe<BuyOffers_Bool_Exp>;
};


export type Subscription_RootBuyOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BuyOffers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BuyOffers_Order_By>>;
  where?: InputMaybe<BuyOffers_Bool_Exp>;
};


export type Subscription_RootBuyOffers_By_PkArgs = {
  buy_offer_id: Scalars['String'];
};


export type Subscription_RootBuy_OffersArgs = {
  distinct_on?: InputMaybe<Array<Buy_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buy_Offers_Order_By>>;
  where?: InputMaybe<Buy_Offers_Bool_Exp>;
};


export type Subscription_RootBuy_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buy_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buy_Offers_Order_By>>;
  where?: InputMaybe<Buy_Offers_Bool_Exp>;
};


export type Subscription_RootBuy_Offers_By_PkArgs = {
  buy_offer_id: Scalars['String'];
};


export type Subscription_RootOnline_UsersArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Subscription_RootOnline_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Subscription_RootReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Subscription_RootReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Subscription_RootReviews_By_PkArgs = {
  review_id: Scalars['Int'];
};


export type Subscription_RootSell_OffersArgs = {
  distinct_on?: InputMaybe<Array<Sell_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sell_Offers_Order_By>>;
  where?: InputMaybe<Sell_Offers_Bool_Exp>;
};


export type Subscription_RootSell_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sell_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sell_Offers_Order_By>>;
  where?: InputMaybe<Sell_Offers_Bool_Exp>;
};


export type Subscription_RootSell_Offers_By_PkArgs = {
  sell_offer_id: Scalars['Int'];
};


export type Subscription_RootTest_TableArgs = {
  distinct_on?: InputMaybe<Array<Test_Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Table_Order_By>>;
  where?: InputMaybe<Test_Table_Bool_Exp>;
};


export type Subscription_RootTest_Table_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Table_Order_By>>;
  where?: InputMaybe<Test_Table_Bool_Exp>;
};


export type Subscription_RootTest_Table_By_PkArgs = {
  test: Scalars['String'];
};


export type Subscription_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  user_id: Scalars['String'];
};

/** columns and relationships of "test_table" */
export type Test_Table = {
  __typename?: 'test_table';
  test: Scalars['String'];
  test2?: Maybe<Scalars['String']>;
  test3?: Maybe<Scalars['String']>;
};

/** aggregated selection of "test_table" */
export type Test_Table_Aggregate = {
  __typename?: 'test_table_aggregate';
  aggregate?: Maybe<Test_Table_Aggregate_Fields>;
  nodes: Array<Test_Table>;
};

/** aggregate fields of "test_table" */
export type Test_Table_Aggregate_Fields = {
  __typename?: 'test_table_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_Table_Max_Fields>;
  min?: Maybe<Test_Table_Min_Fields>;
};


/** aggregate fields of "test_table" */
export type Test_Table_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Table_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test_table". All fields are combined with a logical 'AND'. */
export type Test_Table_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Table_Bool_Exp>>;
  _not?: InputMaybe<Test_Table_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Table_Bool_Exp>>;
  test?: InputMaybe<String_Comparison_Exp>;
  test2?: InputMaybe<String_Comparison_Exp>;
  test3?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_table" */
export enum Test_Table_Constraint {
  /** unique or primary key constraint */
  TestTablePkey = 'test_table_pkey'
}

/** input type for inserting data into table "test_table" */
export type Test_Table_Insert_Input = {
  test?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['String']>;
  test3?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Test_Table_Max_Fields = {
  __typename?: 'test_table_max_fields';
  test?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['String']>;
  test3?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Test_Table_Min_Fields = {
  __typename?: 'test_table_min_fields';
  test?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['String']>;
  test3?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "test_table" */
export type Test_Table_Mutation_Response = {
  __typename?: 'test_table_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Table>;
};

/** on_conflict condition type for table "test_table" */
export type Test_Table_On_Conflict = {
  constraint: Test_Table_Constraint;
  update_columns?: Array<Test_Table_Update_Column>;
  where?: InputMaybe<Test_Table_Bool_Exp>;
};

/** Ordering options when selecting data from "test_table". */
export type Test_Table_Order_By = {
  test?: InputMaybe<Order_By>;
  test2?: InputMaybe<Order_By>;
  test3?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_table */
export type Test_Table_Pk_Columns_Input = {
  test: Scalars['String'];
};

/** select columns of table "test_table" */
export enum Test_Table_Select_Column {
  /** column name */
  Test = 'test',
  /** column name */
  Test2 = 'test2',
  /** column name */
  Test3 = 'test3'
}

/** input type for updating data in table "test_table" */
export type Test_Table_Set_Input = {
  test?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['String']>;
  test3?: InputMaybe<Scalars['String']>;
};

/** update columns of table "test_table" */
export enum Test_Table_Update_Column {
  /** column name */
  Test = 'test',
  /** column name */
  Test2 = 'test2',
  /** column name */
  Test3 = 'test3'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  is_completed?: Maybe<Scalars['Boolean']>;
  is_done?: Maybe<Scalars['Boolean']>;
  is_public?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  avg?: Maybe<Todos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  avg?: InputMaybe<Todos_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Todos_Max_Order_By>;
  min?: InputMaybe<Todos_Min_Order_By>;
  stddev?: InputMaybe<Todos_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Todos_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Todos_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Todos_Sum_Order_By>;
  var_pop?: InputMaybe<Todos_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Todos_Var_Samp_Order_By>;
  variance?: InputMaybe<Todos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: 'todos_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todos" */
export type Todos_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_completed?: InputMaybe<Boolean_Comparison_Exp>;
  is_done?: InputMaybe<Boolean_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing numeric columns in table "todos" */
export type Todos_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_completed?: InputMaybe<Scalars['Boolean']>;
  is_done?: InputMaybe<Scalars['Boolean']>;
  is_public?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_completed?: InputMaybe<Order_By>;
  is_done?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  IsDone = 'is_done',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_completed?: InputMaybe<Scalars['Boolean']>;
  is_done?: InputMaybe<Scalars['Boolean']>;
  is_public?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: 'todos_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todos" */
export type Todos_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: 'todos_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todos" */
export type Todos_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: 'todos_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todos" */
export type Todos_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: 'todos_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todos" */
export type Todos_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  IsDone = 'is_done',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: 'todos_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todos" */
export type Todos_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: 'todos_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todos" */
export type Todos_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: 'todos_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todos" */
export type Todos_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  auth0_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  buy_offers: Array<Buy_Offers>;
  /** An aggregate relationship */
  buy_offers_aggregate: Buy_Offers_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  linked_in?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** An array relationship */
  sell_offers: Array<Sell_Offers>;
  /** An aggregate relationship */
  sell_offers_aggregate: Sell_Offers_Aggregate;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: Todos_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersBuy_OffersArgs = {
  distinct_on?: InputMaybe<Array<Buy_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buy_Offers_Order_By>>;
  where?: InputMaybe<Buy_Offers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersBuy_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buy_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buy_Offers_Order_By>>;
  where?: InputMaybe<Buy_Offers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSell_OffersArgs = {
  distinct_on?: InputMaybe<Array<Sell_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sell_Offers_Order_By>>;
  where?: InputMaybe<Sell_Offers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSell_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sell_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sell_Offers_Order_By>>;
  where?: InputMaybe<Sell_Offers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  auth0_id?: InputMaybe<String_Comparison_Exp>;
  buy_offers?: InputMaybe<Buy_Offers_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  linked_in?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  reviews?: InputMaybe<Reviews_Bool_Exp>;
  sell_offers?: InputMaybe<Sell_Offers_Bool_Exp>;
  todos?: InputMaybe<Todos_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey1 = 'users_pkey1'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  auth0_id?: InputMaybe<Scalars['String']>;
  buy_offers?: InputMaybe<Buy_Offers_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  linked_in?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<Reviews_Arr_Rel_Insert_Input>;
  sell_offers?: InputMaybe<Sell_Offers_Arr_Rel_Insert_Input>;
  todos?: InputMaybe<Todos_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  linked_in?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  linked_in?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  auth0_id?: InputMaybe<Order_By>;
  buy_offers_aggregate?: InputMaybe<Buy_Offers_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  linked_in?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Order_By>;
  sell_offers_aggregate?: InputMaybe<Sell_Offers_Aggregate_Order_By>;
  todos_aggregate?: InputMaybe<Todos_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LinkedIn = 'linked_in',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Picture = 'picture',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth0_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  linked_in?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LinkedIn = 'linked_in',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Picture = 'picture',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'query_root', buy_offers: Array<{ __typename?: 'buy_offers', headline?: string | null, industry: string, offer_details?: string | null, offer_type?: string | null, price?: string | null, buy_offer_id: string }> };


export const Document = gql`
    {
  buy_offers {
    headline
    industry
    offer_details
    offer_type
    price
    buy_offer_id
  }
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Query, QueryVariables>(Document, options);
      }
export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Query, QueryVariables>(Document, options);
        }
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;