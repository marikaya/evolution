import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }


    render() {
        return (
            <html>
            <Head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link href="https://fonts.googleapis.com/css?family=Muli:400,700,800,900&amp;subset=latin-ext" rel="stylesheet"/>
                <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"/>
                <link rel="stylesheet" href="/static/css/responsive.css"/>
                <link rel="stylesheet" href="/static/css/fonts.css"/>
                <link rel="stylesheet" href="/_next/static/style.css" />
            </Head>
            <body className="custom_class">
                <Main />
                <script src="/static/js/jquery-3.3.1.min.js"/>
                <script src="/static/js/pace.min.js"/>
                <script src="/static/js/popper.min.js"/>
                <script src="/static/js/typhead.js"/>
                <script src="/static/js/bootstrap.min.js"/>
                <script src="/static/js/general.js"/>
                <NextScript />
            </body>
            </html>
        )
    }
}