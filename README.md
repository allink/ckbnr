# cookiebanner

## requirements

- `npm install`

## build new version

1. `npm run build`
1. tag the release:

        git add dist/
        git commit -m "new release v1.0.0"
        git tag v1.0.0
        git push origin v1.0.0

## use in project

- newest version:

        <script src="https://cdn.jsdelivr.net/gh/allink/cookiebanner/dist/cookiebanner.min.js"></script>

- specific version:

        <script src="https://cdn.jsdelivr.net/gh/allink/cookiebanner@1.0.0/dist/cookiebanner.min.js"></script>
        <script>
            CookieBanner.init({
                message: 'This site uses cookies to enhance your experience.',
                buttonText: 'Got it!',
                position: 'bottom', // or 'top'
                theme: 'dark' // or 'light'
            });
        </script>
