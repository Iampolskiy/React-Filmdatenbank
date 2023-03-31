import { Link, useLocation } from 'wouter';
import { imageBase } from '../movieDb';
export default function Teaser({
    title,
    original_title,
    poster_path,
    release_date,
    id,
}) {
 

    /*
  location enthält den aktuellen Pfad, mit setLocation kann mit
  JavaScript auf eine URL navigiert werden. Hier kann man beispielsweise
  die ganze Fläche des Elements klickbar machen, ideal
  für Touchbedienung. Wichtig für die barrierefreiheit ist, dass es trotzdem
  noch einen "richtigen" Link gibt, hier mit dem Link-Element im Titel umgesetzt,
  das ein a-Element erzeugt.
  Der erste Wert (location) wird nicht gebraucht und kann
    mit einem Komma am Anfang übersprungen werden. */
    const [, setLocation] = useLocation();

    const posterUrl = poster_path ? `${imageBase}/w342/${poster_path}` : '';

    /* In year soll nur das Jahr aus release_date gespeichert werden: */
    const year = new Date(release_date).getFullYear();

    const linkTarget = `/movie/${id}`;

    return (
   	 // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
   	 <article className="teaser" onClick={() => setLocation(linkTarget)}>
   		 <header className="teaser__header">
   			 <h3 className="teaser__title">
   				 <Link to={linkTarget}>
   					 {title}{' '}
   					 {Number.isInteger(year) && <time dateTime={year}>({year})</time>}
   				 </Link>
   			 </h3>
   			 {/* Originaltitel nur anzeigen, wenn er vom Titel abweicht */}
   			 {title !== original_title && (
   				 <em className="teaser__original-title">{original_title}</em>
   			 )}
   		 </header>

   		 <div className="teaser__poster">
   			 {!posterUrl && (
   				 <div className="teaser__poster__placeholder" aria-hidden="true">
   					 🎞️
   				 </div>
   			 )}
   			 {posterUrl && <img src={posterUrl} alt={`Filmplakat ${title}`} />}
   		 </div>
   	 </article>
    );
}


