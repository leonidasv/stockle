# Stockle - a Wordle clone with Stocks

### [Play now](https://stockle.win)

![chrome_JPnFE4QB7o](https://user-images.githubusercontent.com/17609157/151673416-2123bdc4-706b-4ce1-91fe-bfa556f5b2d8.png)

Forked from [hannahcode/wordle](https://github.com/hannahcode/wordle).

It accepts any 4-letter stock symbol from NYSE/Nasdaq or B3 as input. The daily guessing dataset is composed of some of
most traded stocks (by volume) in the last few days before the game release (Jan 26, 2022).

The "ticker of the day" changes every day at the market opening (9:30am EST for NYSE/Nasdaq or 10:00am BRT for B3).

### TODO

- [ ] Add unit tests
- [ ] Improve i18n
- [ ] Set current market via Context
- [x] Merge dark theme from upstream
    - [ ] Use context for dark theme
- [ ] Improve code organization 😅

Pull Requests are welcome.

### Contributing

_To Run Locally:_
Clone the repository and perform the following command line actions:

```bash
cd stockle
npm install
npm run start
```

_To build/run docker container:_

```bash
docker build -t stockle .
docker run -d -p 3000:3000 stockle
```

Open http://localhost:3000 in browser.
