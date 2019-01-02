import { combineReducers } from 'redux';

import articles from './article_reducers';
import gallery from './gallery_reducers';

const rootReducer = combineReducers({
    articles,
    gallery
})

export default rootReducer;