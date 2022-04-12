import Head from 'next/head';
import AppLayout from '../components/AppLayout';

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