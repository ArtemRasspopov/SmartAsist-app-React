import React from "react";
import { List, ListItem } from "./BreadCrambsStyle";

const BreadCrambs = () => {
  const breadCrambsArray = ["First-level", " Second-level", "Home"];
  return (
    
    <List>
      {breadCrambsArray.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
    
  );
};

export default BreadCrambs;
