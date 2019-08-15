import React from 'react';
import {Route} from 'react-router-dom';
import CharacterList from './CharacterList';

export default function AppRouter() {
    return <div className="page-view ui bottom attached segment active tab">
      <Route path='/' component={CharacterList} />
  </div>
}