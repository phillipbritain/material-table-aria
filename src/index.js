import "./utils/polyfill";
import React from "react";
import { defaultProps } from "./default-props";
import { propTypes } from "./prop-types";
import MaterialTable from "./material-table";
import withStyles from "@material-ui/core/styles/withStyles";

MaterialTable.defaultProps = defaultProps;
MaterialTable.propTypes = propTypes;

export { MaterialTable as MTable };

const styles = (theme) => ({
  root: {
    '& th': {
      fontWeight: "bold",
      position: "relative",
      padding: "0.125em 0.25em"
    },
    '& td': {
      padding: "0.125em 0.25em"
    },
    '& th button': {
      padding: "4px",
      margin: "1px",
      fontSize: "100%",
      fontWeight: "bold",
      background: "transparent",
      border: "none",
      display: "inline",
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      width: "100%",
      textAlign: "left",
      outline: "none",
      cursor: "pointer"
    },
    '& th button span': {
      position: "absolute",
      right: "4px"
    },
    '& th[aria-sort="descending"] span::after': {
      content: `"▼"`,
      color: "currentcolor",
      fontSize: "100%",
      top: 0
    },
    '& th[aria-sort="ascending"] span::after': {
      content: `"▲"`,
      color: "currentcolor",
      fontSize: "100%",
      top: 0
    },
    '& th button:focus': {
      padding: "2px",
      border: "2px solid currentcolor",
      backgroundColor: "#e5f4ff"
    },
    '& th button:hover': {
      padding: "2px",
      border: "2px solid currentcolor",
      backgroundColor: "#e5f4ff"
    },
    '& th button:focus span': {
      right: 2
    },
    '& th button:hover span': {
      right: 2
    },
    '& th:not([aria-sort]) button:focus span::after': {
      content: `"▼"`,
      color: "currentcolor",
      fontSize: "100%",
      top: 0
    },
    '& th:not([aria-sort]) button:hover span::after': {
      content: `"▼"`,
      color: "currentcolor",
      fontSize: "100%",
      top: 0
    }
  },
  paginationRoot: {
    width: "100%",
  },
  paginationToolbar: {
    padding: 0,
    width: "100%",
  },
  paginationCaption: {
    display: "none",
  },
  paginationSelectRoot: {
    margin: 0,
  },
});

export default withStyles(styles, { withTheme: true })((props) => (
  <MaterialTable {...props} ref={props.tableRef} />
));
export * from "./components";
