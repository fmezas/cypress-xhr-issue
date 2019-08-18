import xs from 'xstream'

function view(response$) {
  return response$
    .map(res => res.text)
    .startWith('')
    .map(text =>
         <div>
         <div>My Awesome Cycle.js app</div>
         <div><input type="button" id="button1" value="button 1"/></div>
         <div>{text}</div>
         </div>
        );
}

function intent(DOM) {
  return {
    button1Event$: DOM.select('#button1').events('click')
  };
}

function model(actions) {
  return actions.button1Event$
    .map(_ => ({
      url: 'http://localhost:3000/hello',
      category: 'cat1'
    }))
}

export function App (sources) {
  const actions = intent(sources.DOM);
  const request$ = model(actions);
  const response$ = sources.HTTP
        .select('cat1')
        .flatten();

  const vtree$ = view(response$);

  const sinks = {
    DOM: vtree$,
    HTTP: request$
  }
  return sinks
}
