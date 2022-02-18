import React from 'react'
import '../../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AboutUs() {
  return (
    <div>
      <div class="grid-container">
        <div class="grid-item">

          <h1 style={{display:'flex',alignItems:'center',paddingLeft:'90px',marginTop:'100px',fontSize:64,fontFamily:'poppins',fontWeight:400}} >Who we are?</h1>

          <p className="aboutpg">
          Lorem ipsum dolor sit amet, consectetur dipiscing <br></br> elit. Malesuada ultrices tempor laoreet hendrerit.<br></br> Convallis ut laoreet hendrerit eget justo, enenatis,<br></br> consectetur. 
          Integer etiam faucibus nisl netus erat<br></br> vitae enim lorem.<br></br>
Lorem ipsum dolor sit amet, consectetur dipiscing<br></br> elit. Malesuada ultrices tempor laoreet hendrerit. 
          </p>
        </div>

        <div class="grid-item">
          <img id="img-ab" src = "/images/abo.png"></img>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-item">

        <img id="img-ab2" src = "/images/abo2.png"></img>

        </div>

        <div class="grid-item">

        <div className="jr-container">
            <Card
              className="juniorolym"
            >
              <CardContent>
                <Typography
                  style={{
                    fontSize: "36px",
                    color: "black",
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "70px",
                    alignItems: "justify",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  color="#fff"
                  gutterBottom
                >
                  How student learn with us?
                </Typography>
                <Typography
                  style={{
                    justifyContent:"center",
                    fontSize: "18px",
                    color: "black",
                    display: "flex",
                    textAlign: "justify",
                    fontFamily: "Poppins",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br></br> laoreet tellus nulla in justo. Cursus pulvinar in neque accumsan id <br></br> erat. In amet ac donec magnis ligula. Vulputate mauris, vel ultrices<br></br>
                  quam commodo commodo. Risus id quam urna volutpat dignissim<br></br> ullamcorper. Fermentum ultricies dui leo pulvinar porta. Sollicitudin<br></br>ac eget et habitant nullam.
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>

            
          </div>

          
        <div className="jr-container">
            <Card
              className="juniorolym"
            >
              <CardContent>
                <Typography
                  style={{
                    fontSize: "36px",
                    color: "black",
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "justify",
                    marginLeft: "70px",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  color="#fff"
                  gutterBottom
                >
                  Philosophy
                </Typography>
                <Typography
                  style={{
                    justifyContent:"center",
                    fontSize: "18px",
                    color: "black",
                    display: "flex",
                    textAlign: "justify",
                    fontFamily: "Poppins",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br></br> laoreet tellus nulla in justo. Cursus pulvinar in neque accumsan id <br></br> erat. In amet ac donec magnis ligula. Vulputate mauris, vel ultrices<br></br>
                  quam commodo commodo. Risus id quam urna volutpat dignissim<br></br> ullamcorper. Fermentum ultricies dui leo pulvinar porta. Sollicitudin<br></br>ac eget et habitant nullam.
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>

            
          </div>

        </div>

        </div>

        <div class="hello">
        <div class="heading">
        <h3 style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:40,fontSize:80,fontSize:64,fontFamily:'poppins',fontWeight:400}} >Why 
        <img id='icon' src="/images/code8.png"></img></h3>

        </div>
       <div class="information">
       <div class="list">
          <h3>Our Offerings</h3>
        <ul>
        <li>Project-based Learning</li>
        <li>Start-up & Incubator Network</li>
        <li>Soft Skill Development</li>
        <li>Placement Preparation</li>
        <li>Academic Guidance</li>
        <li>Career Mapping</li>
        </ul></div>
       <div class="text-info">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat vitae vehicula nisi, tincidunt eget. Imperdiet quam quam pharetra in semper senectus semper. Orci dui semper molestie ac rutrum sociis nulla. Hac est donec nulla et sit sit. Quam eu laoreet tellus sed. Ridiculus at mi aliquam lacus lectus scelerisque tempus, dictumst augue. Scelerisque ut non interdum risus et massa amet sed. Vitae, donec aliquam at mauris in. Bibendum senectus nec eget arcu mattis lectus id. Fames aliquet lacus, et massa, ullamcorper sem morbi erat congue.
        </p><br></br><br></br>
        <button class="btn1">Join our community for FREE!</button>
       </div>
     </div>
    </div>

    </div>
  );
}
