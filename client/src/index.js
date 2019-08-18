import {makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import {run} from '@cycle/run';
import {App} from './app';

const main = App;

const drivers = {
  DOM: makeDOMDriver('#root'),
  HTTP: makeHTTPDriver()
};

run(main, drivers);
