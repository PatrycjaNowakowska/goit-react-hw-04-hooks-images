import React from 'react';
import styles from '../Styles.module.css';

function Searchbar({ onSubmit, inputValue, value }) {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9IlI4VGFUalk2OHFEZGdsTnRkTEFhQ2FfNDgxNjdfZ3IxIiB4MT0iMzIiIHgyPSIzMiIgeTE9IjkuMDgzIiB5Mj0iNTQuNjc2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYTZkZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjODIyZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjUjhUYVRqWTY4cURkZ2xOdGRMQWFDYV80ODE2N19ncjEpIiBkPSJNNTAsNTVIMTRjLTIuNzU3LDAtNS0yLjI0My01LTVWMTRjMC0yLjc1NywyLjI0My01LDUtNWgzNmMyLjc1NywwLDUsMi4yNDMsNSw1djM2IEM1NSw1Mi43NTcsNTIuNzU3LDU1LDUwLDU1eiBNMTQsMTFjLTEuNjU0LDAtMywxLjM0Ni0zLDN2MzZjMCwxLjY1NCwxLjM0NiwzLDMsM2gzNmMxLjY1NCwwLDMtMS4zNDYsMy0zVjE0YzAtMS42NTQtMS4zNDYtMy0zLTNIMTQgeiI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iUjhUYVRqWTY4cURkZ2xOdGRMQWFDYl80ODE2N19ncjIiIHgxPSIzMy41IiB4Mj0iMzMuNSIgeTE9IjEwLjQzOCIgeTI9IjU1Ljc1MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWE2ZGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgyMmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1I4VGFUalk2OHFEZGdsTnRkTEFhQ2JfNDgxNjdfZ3IyKSIgZD0iTTQ3LDQ1LjU0NWwtOC4zODctOC4zODhDNDAuMTAzLDM1LjM0NCw0MSwzMy4wMjUsNDEsMzAuNUM0MSwyNC43MSwzNi4yOSwyMCwzMC41LDIwIFMyMCwyNC43MSwyMCwzMC41UzI0LjcxLDQxLDMwLjUsNDFjMi41MjUsMCw0Ljg0NS0wLjg5Nyw2LjY1OC0yLjM4OEw0NS41NDUsNDdMNDcsNDUuNTQ1eiBNMzAuNSwzOWMtNC42ODcsMC04LjUtMy44MTMtOC41LTguNSBzMy44MTMtOC41LDguNS04LjVzOC41LDMuODEzLDguNSw4LjVTMzUuMTg3LDM5LDMwLjUsMzl6Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJSOFRhVGpZNjhxRGRnbE50ZExBYUNjXzQ4MTY3X2dyMyIgeDE9IjMwLjUiIHgyPSIzMC41IiB5MT0iMjQiIHkyPSIzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmRjN2ZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTZhYmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1I4VGFUalk2OHFEZGdsTnRkTEFhQ2NfNDgxNjdfZ3IzKSIgZD0iTTMwLjUgMjRBNi41IDYuNSAwIDEgMCAzMC41IDM3QTYuNSA2LjUgMCAxIDAgMzAuNSAyNFoiPjwvcGF0aD48L3N2Zz4="/>
        </button>

        <input
          className={styles.SearchForm_input}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputValue}
        />
      </form>
    </header>
  );
}

export default Searchbar;