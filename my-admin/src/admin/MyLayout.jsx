import { ReactNode } from 'react';
import { CheckForApplicationUpdate, Layout } from 'react-admin';

export const MyLayout = ({ children }) => (
    <Layout>
        {children}
        <CheckForApplicationUpdate />
    </Layout>
);