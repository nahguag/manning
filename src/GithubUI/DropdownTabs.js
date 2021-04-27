import React, { useState } from "react";
import "./DropdownTabs.css";

const DropdownTabs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button className="customButton" onClick={() => setModalOpen(!modalOpen)}>
        {modalOpen ? "Close Modal" : "Open Modal"}
      </button>
      <div
        id="mymodal"
        className="SelectMenu"
        style={{ visibility: `${modalOpen ? "visible" : "hidden"}` }}>
        <div className="SelectMenu-modal">
          <header className="SelectMenu-header">
            <span className="SelectMenu-title">Switch branches/tags</span>
            <button
              className="SelectMenu-closeButton"
              type="button"
              data-toggle-for="branch-select-menu"
              onClick={() => setModalOpen(false)}>
              <svg
                aria-label="Close menu"
                aria-hidden="false"
                className="octicon octicon-x"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16">
                <path
                  fillRule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
              </svg>
            </button>
          </header>
          <input-demux
            data-action="tab-container-change:input-demux#storeInput tab-container-changed:input-demux#updateInput"
            data-catalyst>
            <tab-container
              className="d-flex flex-column js-branches-tags-tabs"
              style={{ minHeight: 0 }}>
              <div className="SelectMenu-filter">
                <input
                  type="text"
                  id="context-commitish-filter-field"
                  className="SelectMenu-input form-control"
                />
              </div>
              <div className="SelectMenu-tabs" role="tablist" data-target="input-demux.control">
                <button
                  className="SelectMenu-tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                  tabindex="0">
                  Branches
                </button>
                <button
                  className="SelectMenu-tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  tabindex="-1">
                  Tags
                </button>
              </div>
              <div
                role="tabpanel"
                id="ref-list-branches"
                data-filter-placeholder="Filter branches/tags"
                className="d-flex flex-column flex-auto overflow-auto"
                tabindex="">
                <ref-selector
                  type="branch"
                  data-targets="input-demux.sinks"
                  data-action="input-entered:ref-selector#inputEntered tab-selected:ref-selector#tabSelected focus-list:ref-selector#focusFirstListMember"
                  query-endpoint="/ManZzup/plguides/refs"
                  cache-key="v0:1615299629.399331"
                  current-committish="bWFzdGVy"
                  default-branch="bWFzdGVy"
                  name-with-owner="TWFuWnp1cC9wbGd1aWRlcw=="
                  data-catalyst="">
                  <template data-target="ref-selector.noMatchTemplate">
                    <div className="SelectMenu-message">Nothing to show</div>
                  </template>
                  <div
                    data-target="ref-selector.listContainer"
                    role="menu"
                    className="SelectMenu-list"
                    style={{ maxHeight: "330px" }}>
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        minHeight: "100%",
                        willChange: "transform",
                        height: "3330px"
                      }}>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%",
                          overflow: "visible"
                        }}>
                        <a
                          href="https://github.com/ManZzup/plguides/blob/master/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={true}
                          data-index="0">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">master</span>
                          <span className="Label Label--secondary flex-self-start">default</span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01---reusable%2Fnoogle%2Facorn-5.7.4/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="1">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01---reusable/noogle/acorn-5.7.4
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01---reusable%2Fnoogle%2Felliptic-6.5.4/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="2">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01---reusable/noogle/elliptic-6.5.4
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01---reusable%2Fnoogle%2Fhandlebars-4.7.6/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="3">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01---reusable/noogle/handlebars-4.7.6
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01---reusable%2Fnoogle%2Fhttp-proxy-1.18.1/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="4">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01---reusable/noogle/http-proxy-1.18.1
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01---reusable%2Fnoogle%2Fini-1.3.7/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="5">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01---reusable/noogle/ini-1.3.7
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01---reusable%2Fnoogle%2Fmixin-deep-1.3.2/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="6">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01---reusable/noogle/mixin-deep-1.3.2
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01---reusable%2Fnoogle%2Fwebsocket-extensions-0.1.4/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="7">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01---reusable/noogle/websocket-extensions-0.1.4
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01-reusabel-components-with-react-and-redux%2Fnoogle%2Facorn-5.7.4/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="8">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01-reusabel-components-with-react-and-redux/noogle/acorn-5.7.4
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01-reusabel-components-with-react-and-redux%2Fnoogle%2Felliptic-6.5.4/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="9">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01-reusabel-components-with-react-and-redux/noogle/elliptic-6.5.4
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01-reusabel-components-with-react-and-redux%2Fnoogle%2Fhandlebars-4.7.6/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="10">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01-reusabel-components-with-react-and-redux/noogle/handlebars-4.7.6
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01-reusabel-components-with-react-and-redux%2Fnoogle%2Fhttp-proxy-1.18.1/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="11">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01-reusabel-components-with-react-and-redux/noogle/http-proxy-1.18.1
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01-reusabel-components-with-react-and-redux%2Fnoogle%2Fini-1.3.7/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="12">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01-reusabel-components-with-react-and-redux/noogle/ini-1.3.7
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F01-reusabel-components-with-react-and-redux%2Fnoogle%2Fwebsocket-extensions-0.1.4/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="13">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/01-reusabel-components-with-react-and-redux/noogle/websocket-extensions-0.1.4
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F02-deciding-when-to-connect-your-components-to-the-redux-store%2Ftodoplus%2Facorn-5.7.4/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="14">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/02-deciding-when-to-connect-your-components-to-the-redux-store/todoplus/acorn-5.7.4
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>

                        <a
                          href="https://github.com/ManZzup/plguides/blob/dependabot/npm_and_yarn%2F02-deciding-when-to-connect-your-components-to-the-redux-store%2Ftodoplus%2Felliptic-6.5.4/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                          className="SelectMenu-item"
                          role="menuitemradio"
                          rel="nofollow"
                          aria-checked={false}
                          data-index="15">
                          <svg
                            className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                          </svg>
                          <span className="flex-1 css-truncate css-truncate-overflow ">
                            dependabot/npm_and_yarn/02-deciding-when-to-connect-your-components-to-the-redux-store/todoplus/elliptic-6.5.4
                          </span>
                          <span hidden="" className="Label Label--secondary flex-self-start">
                            default
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <template data-target="ref-selector.itemTemplate">
                    <a
                      href="https://github.com/ManZzup/plguides/blob/{{ urlEncodedRefName }}/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                      className="SelectMenu-item"
                      role="menuitemradio"
                      rel="nofollow"
                      aria-checked="{{ isCurrent }}"
                      data-index="{{ index }}">
                      <svg
                        className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        height="16"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                      </svg>
                      <span className="flex-1 css-truncate css-truncate-overflow {{ isFilteringclassName }}">
                        {/* {{ refName }} */} refname
                      </span>
                      <span
                        hidden="{{ isNotDefault }}"
                        className="Label Label--secondary flex-self-start">
                        default
                      </span>
                    </a>
                  </template>
                  <footer className="SelectMenu-footer">
                    <a href="/ManZzup/plguides/branches">View all branches</a>
                  </footer>
                </ref-selector>
              </div>
              <div
                role="tabpanel"
                id="tags-menu"
                data-filter-placeholder="Find a tag"
                className="d-flex flex-column flex-auto overflow-auto"
                tabindex=""
                hidden="">
                <ref-selector
                  type="tag"
                  data-action="input-entered:ref-selector#inputEntered tab-selected:ref-selector#tabSelected focus-list:ref-selector#focusFirstListMember"
                  data-targets="input-demux.sinks"
                  query-endpoint="/ManZzup/plguides/refs"
                  cache-key="v0:1615299629.399331"
                  current-committish="bWFzdGVy"
                  default-branch="bWFzdGVy"
                  name-with-owner="TWFuWnp1cC9wbGd1aWRlcw=="
                  data-catalyst="">
                  <template data-target="ref-selector.noMatchTemplate">
                    <div className="SelectMenu-message" data-index="{{ index }}">
                      Nothing to show
                    </div>
                  </template>

                  <template data-target="ref-selector.itemTemplate">
                    <a
                      href="https://github.com/ManZzup/plguides/blob/{{ urlEncodedRefName }}/11-using-websockets-in-your-react-redux-app/chat-app/src/WebSocket.js"
                      className="SelectMenu-item"
                      role="menuitemradio"
                      rel="nofollow"
                      aria-checked="{{ isCurrent }}"
                      data-index="{{ index }}">
                      <svg
                        className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        height="16"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                      </svg>
                      <span className="flex-1 css-truncate css-truncate-overflow {{ isFilteringclassName }}">
                        {/* {{ refName }} */} refname
                      </span>
                      <span
                        hidden="{{ isNotDefault }}"
                        className="Label Label--secondary flex-self-start">
                        default
                      </span>
                    </a>
                  </template>
                  <div
                    data-target="ref-selector.listContainer"
                    role="menu"
                    className="SelectMenu-list"
                    style={{ maxHeight: "330px" }}>
                    <div className="SelectMenu-loading pt-3 pb-0" aria-label="Menu is loading">
                      <svg
                        style={{ boxSizing: "content-box", color: `var(--color-icon-primary)` }}
                        viewBox="0 0 16 16"
                        fill="none"
                        width="32"
                        height="32"
                        className="anim-rotate">
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="currentColor"
                          stroke-opacity="0.25"
                          stroke-width="2"
                          vector-effect="non-scaling-stroke"></circle>
                        <path
                          d="M15 8a7.002 7.002 0 00-7-7"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          vector-effect="non-scaling-stroke"></path>
                      </svg>
                    </div>
                  </div>
                  <footer className="SelectMenu-footer">
                    <a href="/ManZzup/plguides/tags">View all tags</a>
                  </footer>
                </ref-selector>
              </div>
            </tab-container>
          </input-demux>
        </div>
      </div>
    </>
  );
};

export default DropdownTabs;
