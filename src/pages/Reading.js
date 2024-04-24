import '../App.css'
import {webtoons} from './Reading/data.js';
import {getImageUrl} from './Reading/utils.js';


function toggleInfo(curID){
  document.getElementById(curID).classList.toggle('hidden');
}

function Reading() {
  const chemists = webtoons.filter(mana =>
    mana.profession === 'chemist'
);
// const listItems = chemists.map(person =>
  const listItems = webtoons.map(mana =>
    <div className='mana' key={mana.id} onClick={ () => toggleInfo(mana.id)}>
      {/* <div className='manaTitle'>
        <p style={{fontSize: mana.fontSize + '%'}}>
          {mana.title}
          <br/>
          {mana.title2}
        </p>
      </div> */}
      <div id={mana.id} className='manaInfo hidden'>
        <p className='infoText'>
          {mana.title2 ? (
            <>
            <p className='infoTitle One'>{mana.title}</p>
            <p className='infoTitle Two'>{mana.title2}</p>
            </>
          ) : (
            <p className='infoTitle'>{mana.title}</p>
          )}
          <p className='infoGenre'>{mana.Genre}</p>
          <p className='header'>Status:</p><p className='infoHeader'>{mana.Status}</p>
          <p className='header'>Season:</p><p className='infoHeader'>{mana.Season}</p>
        </p>
      </div>
      <div className='imageScale'>
        <img
          src={getImageUrl(mana)}
          alt={mana.title}
        />
      </div>
    </div>
  );
  return <>{listItems}</>;
}
  
  export default Reading;