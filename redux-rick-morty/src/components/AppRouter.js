import React from 'react';
import {Route} from 'react-router-dom';
import CharacterList from './CharacterList';
import LocationList from './LocationList';

export default function AppRouter() {
    return <div className="page-view ui bottom attached segment active tab">
      <Route exact path='/' component={CharacterList} />
      <Route path='/locations' component={LocationList} />

  </div>
}