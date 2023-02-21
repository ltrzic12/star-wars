import React from 'react';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';
import { ILoader } from '../helpers/interfaces/ILoader';

const Layout = <P extends object>(Component: React.ComponentType<P>) =>
    class Layout extends React.Component<P & ILoader> {
        render(): JSX.Element {
            const { isLoad, ...props } = this.props;

            if (!isLoad) {
                return <Loader />;
            }

            return (
                <>
                    <NavBar {...(props as P)} />
                    <Component {...(props as P)} />
                </>
            );
        }
    };

export default Layout;
