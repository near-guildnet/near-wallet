import React from 'react';
import styled from 'styled-components';
import helpIcon from '../../images/icon-help-white.svg';
import { IS_MAINNET, NODE_URL } from '../../utils/wallet';
import { Modal } from 'semantic-ui-react';
import { Translate } from 'react-localize-redux';

const Container = styled.div`
    color: white;
    background-color: #0072CE;
    position: fixed;
    height: 35px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        color: white;

        :hover {
            color: white;
            text-decoration: underline;
        }
    }

    .trigger-string {
        display: flex;
        align-items: center;
        cursor: pointer;

        :after {
            content: '';
            background: url(${helpIcon}) center no-repeat;
            height: 18px;
            width: 18px;
            margin: 0 0 0 6px;
            display: inline-block;
        }
    }
`

const Header = styled.h4`
    margin-bottom: 5px !important;
`

const NetworkBanner = (props) => {
    if (!IS_MAINNET) {
        return (
            <Container>
                <Modal 
                    size='mini'
                    trigger={
                        <div className='trigger-string'>
                            <Translate id='networkBanner.title' />&nbsp;
                            (<a href={`${NODE_URL}/status`} target='_blank' rel='noopener noreferrer' onClick={e => e.stopPropagation()}>
                                {NODE_URL.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]}
                            </a>)
                        </div>
                    }
                    closeIcon
                >
                    <Header><Translate id='networkBanner.header' /></Header>
                    <Translate id='networkBanner.desc' />
                </Modal>
            </Container>
        )
    } else if (IS_MAINNET && !props.accountId) {
        return (
            <Container>
                <Translate id='landing.banner' />
            </Container>
        )
    } else {
        return null
    }
}

export default NetworkBanner;