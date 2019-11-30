import React, { Component } from 'react';

import Wrapper from '../wrapper/wrapper';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                error: null
            }

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                this.setState({ error: err });
            });
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        render() {
            return (
                <Wrapper>
                    {this.state.error ? this.state.error.message : null}
                    <WrappedComponent {...this.props} />
                </Wrapper>
            )
        }

    }
}
export default withErrorHandler;