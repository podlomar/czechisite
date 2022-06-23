export interface PageProps {
  lang: string,
  title: string,
}

export const renderFullPage = (body: string, props: PageProps): string => `
  <!DOCTYPE html>
  <html lang="${props.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${props.title}</title>
  </head>
  <body>
    ${body}
  </body>
  </html>    
`;
