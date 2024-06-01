import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
      </Head>
      <body>
        <Main />
        <div
          id="sfcscm57mlg94hhw1yr54rf8yjuwulnp2ra"
          style={{ backgroundColor: "black" }}
        ></div>
        <script
          type="text/javascript"
          src="https://counter11.optistats.ovh/private/counter.js?c=scm57mlg94hhw1yr54rf8yjuwulnp2ra&down=async"
          async
        ></script>
        <a href="https://www.freecounterstat.com"></a>
        <noscript>
          <a href="https://www.freecounterstat.com" title="web counter">
            <Image
              src="https://counter11.optistats.ovh/private/freecounterstat.php?c=scm57mlg94hhw1yr54rf8yjuwulnp2ra"
              alt="web counter"
              width={1}
              height={1}
            />
          </a>
        </noscript>
        <NextScript />
      </body>
    </Html>
  );
}
