import React from "react";
import CircularProgressWithLabel from "../atoms/CircularWithLabel";
import styles from "./QualityCircle.module.css";
import { SubjectiveSleep } from "@/types";

interface QualityCircleProps {
  value: SubjectiveSleep;
}

export default function QualityCircle({ value }: QualityCircleProps) {
  return (
    <div className={styles.container}>
      <p>Quality</p>
      <div>
        <CircularProgressWithLabel value={value} />
      </div>
    </div>
  );
}
