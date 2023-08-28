import { Link } from '../../components/Link/Link';
import Icon from '../../components/Icon';
import './ReachNewHeights.scss';

export const ReachNewHeights = () => {
  return (
    <section className='reach-new-heights'>
      <div className='reach-new-heights__content'>
        <div>
          <div className='reach-new-heights__headline'>
            <h1>Erreiche mit deinem <span>Team</span> neue Erfolge und startet eure erste <span>Retrospektive.</span></h1>
            <p>Beginnt unmittelbar eure erste gemeinsame Sitzung - es ist keine Registrierung erforderlich und es ist absolut kostenlos.</p>
          </div>
          <div className='reach-new-heights__buttons'>
            <Link href='/new'>Get Started</Link>
            <Link href='' tertiary icon={<Icon name='ArrowRight'/>}>
              How it works
            </Link>
          </div>
        </div>
        <img 
          src='assets/images/reach-new-heights_light.svg' 
          alt='Reach new heights' 
          className='reach-new-heights__image reach-new-heights__image--light'
        />
        <img
          src='assets/images/reach-new-heights_dark.svg' 
          alt='Reach new heights'
          className='reach-new-heights__image reach-new-heights__image--dark'
        />
        <div className='reach-new-heights__information'>
          <div className='reach-new-heights__information-item'>
            <img src='assets/icons/icon_what-is-it-about_light.svg' alt='What is it about?' className='information-item__icon information-item__icon--light' />
            <img src='assets/icons/icon_what-is-it-about_dark.svg' alt='What is it about?' className='information-item__icon information-item__icon--dark' />
            <h2>Worum geht es?</h2>
            <p>Scrumlr ist ein kooperatives Tool zum <b>Austausch von Ideen, Meinungen und Feedback.</b></p>
          </div>

          <div className='reach-new-heights__information-item'>
            <img src='assets/icons/icon_how-can-it-be-used_light.svg' alt='How can it be used?' className='information-item__icon information-item__icon--light' />
            <img src='assets/icons/icon_how-can-it-be-used_dark.svg' alt='How can it be used?' className='information-item__icon information-item__icon--dark' />
            <h2>Wie wird es genutzt?</h2>
            <p>Scrumlr ist jederzeit und auf allen Endgeräten verfügbar - einfach <b>Website aufrufen und auf Start klicken.</b></p>
          </div>
        </div>
      </div>
    </section>
  );
};
