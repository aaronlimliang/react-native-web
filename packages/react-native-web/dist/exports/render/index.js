/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
import * as ReactDOM from 'react-dom/client';
import { createSheet } from '../StyleSheet/dom';
export function hydrate(element, root, callback) {
  createSheet(root);
  ReactDOM.createRoot(root, { hydrate: true }).render(element, callback);
}
export default function render(element, root, callback) {
  createSheet(root);
  ReactDOM.createRoot(root).render(element, callback);
}