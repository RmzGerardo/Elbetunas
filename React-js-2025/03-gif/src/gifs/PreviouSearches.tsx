import type { FC } from "react";

interface Props {
searches: string[];

onlabelClick: (term:string) => void;

}

export const PreviouSearches: FC<Props> = ({searches, onlabelClick}) => {
  return (
    <div className="previous-searches">
          <h2>Busquedas recientes</h2>
          <ul className="previous-searches-list">
            {
              searches.map(term => (
                <li key={term} onClick={() => onlabelClick(term)}>
                  {term}
                </li>
              ))
            }
          </ul>
      </div>
  )
}
