import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';

const Contact = ({ data, color }) => {
  const { name, photoUrl, location, phone, email, linkedin, github, website } = data.contact;

  return (
    <>
      <div className='photo-container'>
        {photoUrl === '' ? null : (
        <img src={photoUrl} alt='' />
        )}
      </div>
        
      {name  === '' ? null : (
        <div className='name' style={{ color: `${color.primary}` }}>
          {name}
        </div>
      )}
      <div className='contact'>
        {location && (
          <div className='item'>
            <LocationOnIcon style={{ color: `${color.primary}`,margin: "2px 6px", height:"17px"  }}/>
            {location}
          </div>
        )}
        {phone && (
          <div className='item'>
            <PhoneIcon style={{ color: `${color.primary}`,margin: "2px 5px", height:"17px" }}/>
              <a href={phone}>{phone}</a>
          </div>
        )}
        {email && (
          <div className='item'>
            <EmailIcon style={{ color: `${color.primary}`, margin: "2px 5px", height:"17px"  }}/>
              <a href={email}>{email}</a>
          </div>
        )}
        {linkedin && (
          <div className='item'>
            <LinkedInIcon style={{ color: `${color.primary}`,margin: "2px 5px", height:"17px"  }}/>
              <a href={'https://www.' + linkedin} >
                {linkedin}
              </a>
          </div>
        )}
        {github && (
          <div className='item'>
            <GitHubIcon style={{ color: `${color.primary}`,margin: "4px 6px", height:"17px"  }}/>
              <a href={'https://www.' + github} >
                {github}
              </a>
          </div>
        )}
        {website && (
          <div className='item'>
            <LanguageIcon style={{ color: `${color.primary}`,margin: "4px 6px", height:"17px"  }}/>
              <a href={'https://www.' + website} >
                {website}
              </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
