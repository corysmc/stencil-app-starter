/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@ionic/core';


declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {
      'name': string;
    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSlots {

    }
  }

  interface HTMLAppSlotsElement extends StencilComponents.AppSlots, HTMLStencilElement {}

  var HTMLAppSlotsElement: {
    prototype: HTMLAppSlotsElement;
    new (): HTMLAppSlotsElement;
  };
  interface HTMLElementTagNameMap {
    'app-slots': HTMLAppSlotsElement;
  }
  interface ElementTagNameMap {
    'app-slots': HTMLAppSlotsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-slots': JSXElements.AppSlotsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSlotsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyApp {

    }
  }

  interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ScrollableRow {
      'company': any;
    }
  }

  interface HTMLScrollableRowElement extends StencilComponents.ScrollableRow, HTMLStencilElement {}

  var HTMLScrollableRowElement: {
    prototype: HTMLScrollableRowElement;
    new (): HTMLScrollableRowElement;
  };
  interface HTMLElementTagNameMap {
    'scrollable-row': HTMLScrollableRowElement;
  }
  interface ElementTagNameMap {
    'scrollable-row': HTMLScrollableRowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'scrollable-row': JSXElements.ScrollableRowAttributes;
    }
  }
  namespace JSXElements {
    export interface ScrollableRowAttributes extends HTMLAttributes {
      'company'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ShuffleContent {

    }
  }

  interface HTMLShuffleContentElement extends StencilComponents.ShuffleContent, HTMLStencilElement {}

  var HTMLShuffleContentElement: {
    prototype: HTMLShuffleContentElement;
    new (): HTMLShuffleContentElement;
  };
  interface HTMLElementTagNameMap {
    'shuffle-content': HTMLShuffleContentElement;
  }
  interface ElementTagNameMap {
    'shuffle-content': HTMLShuffleContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'shuffle-content': JSXElements.ShuffleContentAttributes;
    }
  }
  namespace JSXElements {
    export interface ShuffleContentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface WatchBug {
      'update': string;
    }
  }

  interface HTMLWatchBugElement extends StencilComponents.WatchBug, HTMLStencilElement {}

  var HTMLWatchBugElement: {
    prototype: HTMLWatchBugElement;
    new (): HTMLWatchBugElement;
  };
  interface HTMLElementTagNameMap {
    'watch-bug': HTMLWatchBugElement;
  }
  interface ElementTagNameMap {
    'watch-bug': HTMLWatchBugElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'watch-bug': JSXElements.WatchBugAttributes;
    }
  }
  namespace JSXElements {
    export interface WatchBugAttributes extends HTMLAttributes {
      'update'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
