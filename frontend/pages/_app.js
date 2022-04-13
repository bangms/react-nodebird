import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';
// _document.js         html, head, body
// _app.js              root
// pages                실제 컴포넌트 
// _error.js            에러가 발생한 경우

export default function NodeBird({ Component }) {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
}
// www.npmjs.com/package/prop-types
NodeBird.PropTypes = {
    Component: PropTypes.element,
}
