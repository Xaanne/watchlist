import '../App.css'
import {webtoons} from './Reading/data.js';
import {getImageUrl} from './Reading/utils.js';
import kr from '../KR.svg';
import cn from '../CN.svg';
import jp from '../JP.svg';

function toggleInfo(curID){
  document.getElementById(curID).classList.toggle('hidden');
}

function getInfoColor(color){
  var coloring;

  switch (color) {
    case 'red':
      coloring = 'rgba(245, 122, 122, 0.5)';
      break;
    case 'orange':
      coloring = 'rgba(255, 134, 59, 0.5)';
      break;
    case 'yellow':
      coloring = 'rgba(255, 223, 164, 0.5)';
      break;
    case 'green':
      coloring = 'rgba(166, 255, 178, 0.5)';
      break;
    case 'turquoise':
      coloring = 'rgba(157, 247, 255, 0.5)';
      break;
    case 'blue':
      coloring = 'rgba(120, 176, 255, 0.5)';
      break;
    case 'indigo':
      coloring = 'rgba(144, 146, 255, 0.5)';
      break;
    case 'violett':
      coloring = 'rgba(187, 166, 255, 0.5)';
      break;
    case 'purple':
      coloring = 'rgba(236, 166, 255, 0.5)';
      break;
    case 'pink':
      coloring = 'rgba(255, 117, 225, 0.5)';
      break;
    case 'rose':
      coloring = 'rgba(255, 145, 182, 0.5)';
      break;
    case 'beige':
      coloring = 'rgba(255, 244, 223, 0.5)';
      break;
    case 'grey':
      coloring = 'rgba(166, 203, 255, 0.5)';
      break;
    default:
      coloring = 'rgba(90, 90, 90, 0.5)';
  }

  return coloring;
}

function getCountryFlag(country){
  if (country === 'KR'){
    return kr;
  }else if (country === 'CN'){
    return cn;
  }else if (country === 'JP'){
    return jp;
  }
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
      {/* , objectPosition: 'left' */}
      <div id={mana.id} className='manaInfo hidden' style={{backgroundColor: getInfoColor(mana.color)}}>
        {/* <img src={getImageUrl(mana)} alt="" id="infoBack" /> */}
        <p className='infoText'>
          {mana.title2 ? (
            <>
            <p className='infoTitle One'>{mana.title}</p>
            <p className='infoTitle Two'>{mana.title2}</p>
            </>
          ) : (
            <p className='infoTitle'>{mana.title}</p>
          )}
          <div className="infoAbout">
            <p className='infoGenre'>{mana.Genre}</p>
            {/* <p className='infoCountry'>{mana.id}</p> */}
            <img className='infoFlag' src={getCountryFlag(mana.Country)} alt=""/>
          </div>
          <p className='header'>Status:</p><p className='infoHeader'>{mana.Status}</p>
          <div className="infoAbout">
            {mana.Chapters ? (
              <>
              <div>
                <p className='header'>Season:</p>
                <p className='infoHeader'>{mana.Season}</p>
              </div>
              <div>
                <p className='header'>Chapters:</p>
                <p className='infoHeader'>{mana.Chapters}</p>
              </div>
              </>
            ):(
              <div>
                <p className='header'>Season:</p>
                <p className='infoHeader'>{mana.Season}</p>
              </div>
            )}
          </div>
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
  return <div className='container'>{listItems}</div>;
}
  
  export default Reading;