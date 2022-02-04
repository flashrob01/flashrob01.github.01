/* import React from 'react'
import styled from 'styled-components'
import{
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import Button from '../reusable/button'
import {PROVIDER, PROVIDER_NAME } from 'constants/auth'
import {useTranslation } from 'internationalization'
import {getProvidersUrls} from 'utils/auth'

const PROVIDER_COLOR = {
    [PROVIDER.LINKEDIN]: '#0073b1'
}

const PROVIDER_ICON = {
    [PROVIDER.LINKEDIN]: faLinkedin,
}

const ButtonWrapper = styled.div`
margin: 10px 0;
`

const Providers = ({ purpose }) => {
    const{t} = useTranslation()
    const text = t('auth.modal')[purpose]

    const providersUrls = getProvidersUrls()

    return Object.keys(PROVIDER).map(provider =>
        <ButtonWrapper key={provider}>
            <Button 
                linkTo={providersUrls[provider]}
                externalInSameTab
                background={PROVIDER_COLOR[provider]}
                text={`${text.button} ${PROVIDER_NAME[provider]}`}
                icon={PROVIDER_ICON[provider]}
            />
            </ButtonWrapper>
    )
} */