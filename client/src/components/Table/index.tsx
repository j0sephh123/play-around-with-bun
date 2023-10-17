import { PropsWithChildren } from "react";
import styles from "./Table.module.css";

export const Wrapper = ({ children }: PropsWithChildren) => (
  <table className={styles.table}>{children}</table>
);

export const Head = ({ children }: PropsWithChildren) => (
  <thead>{children}</thead>
);

export const Body = ({ children }: PropsWithChildren) => (
  <tbody>{children}</tbody>
);

export const Label = ({ children }: PropsWithChildren) => (
  <th className={styles.th}>{children}</th>
);

export const Cell = ({ children }: PropsWithChildren) => (
  <td className={styles.td}>{children}</td>
);

export const Row = ({ children }: PropsWithChildren) => <tr>{children}</tr>;
