import Document, { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document';
import React from 'react';
import { AppType } from 'next/app';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='theme-color'
          content='white'
        />
        <meta charSet='utf-8' />
        <meta
          http-eqiv='Content-Type'
          content='text/html; charset=UTF-8'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit:wght@100;200&display=swap'
          rel='stylesheet'></link>
      </Head>
      <body>
        <div id='page-transition'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
