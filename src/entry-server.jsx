import React from 'react';
import {renderToString} from 'react-dom/server';
import {App, paths, metadata} from './App.jsx';
export {paths, metadata};
export {questions,guideQuestions} from './App.jsx';
export {languages,parseLocale,localePath,translate} from './i18n.jsx';
export function render(path){return renderToString(<App initialPath={path}/>);}
