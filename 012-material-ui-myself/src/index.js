import React from 'react';
import { render } from 'react-dom';

import AutoComplete from './AutoComplete';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
render(<AutoComplete />, document.getElementById('root'));
