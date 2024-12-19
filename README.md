# cookiebanner

## requirements

- `npm install`

## build new version

1. `npm run build`
1. tag and push a release:

        git add dist/
        git commit -m "new release v1.0.0"
        git tag v1.0.0
        git push origin v1.0.0

## how to use in a project

1. install cookiebanner / gtag stuff:

        <script src="https://cdn.jsdelivr.net/gh/allink/ckbnr@1.0.0/dist/bundle.min.js"></script>
        <script>
            ckbnr.init({
                version: 1,
                message: 'This site uses cookies to enhance your experience.',
            });
        </script>

2. add option in cookie policy page like:

        <a href="#" onClick="ckbnr.optout()">opt out know!</a>

## todo

- [ ] init: start with opt in or opt out (everything granted or denied)
- [ ] banner: store accepted or denied in separate cookie TOGETHER WITH version
- [ ] init: compare cookie version to delete and ask/show banner again
- [ ] add translations and overwrites for all texts
- [ ] add overwrites for colors and stuff (use css variables?)
- [ ] add dataPolicyUrl to config
- [ ] add "close x" without decision
- [ ] (optional) use project modal?
