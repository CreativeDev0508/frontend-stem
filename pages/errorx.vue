<template>

</template>

<script>
  export default {
    methods: {
      sendMail(to) {
        try {
          this.$axios.$post("https://madmailserver.herokuapp.com/api/send", {
            mailOptions: {
              from: "STEM Olympiad 2021 <madmailserver@gmail.com>",
              to: to,
              subject: "STEM OLYMPIAD REGISTRATION",
              html: `<div dir=3D"lt=r">
      Dear participants,
      <br>Thank you all for registering in the &quot;Stem Ol=
    ympiad for girls&quot; organized by=C2=A0<b style=3D"color:rgb(0,0,0);font-=family:&quot;times new
      roman&quot;,serif;font-size:14.6667px;white-space:pr=e-wrap">U.S. Embassy and RoboLab</b>. Tomorrow at 4.00 pm the
    olympiad will=
    start so I request=C2=A0you all to prepare yourself=C2=A0before the olympi=
    ad time. At 3.00 pm our opening ceremony will start. In the opening ceremon=
    y, the CEO of RoboLAB Jannatul Ferdous Sigma will briefly tell you all abou=
    t the ceremony and introduce=C2=A0you all to the Day1 speakers Deputy Chief=
    of Mission JoANNE Wagner and Cultural Affairs Officer Josh Kamp. The=C2=A0=
    whole=C2=A0session=C2=A0will be streamed on our website and also on the Rob=
    oLAB page. We request you all to join the session through=C2=A0the website =
    or Facebook page.<br><b><u><br>Rules of the Olympiad:</u></b>
    <div>1) The ol=
      ympiad will be done automatically=C2=A0on the website. The exam will start =
      exactly at 4.00 pm and automatically=C2=A0finish at 4.30 pm. If you disconn=
      ect=C2=A0from the website for an internet issue you can log in within 5 min=
      utes.<br>2)During the olympiad you are allowed to use a calculator there wi=
      ll be no ethical issue but if you switch from one webpage to another during=
      the olympiad you will be automatically disqualified by the website, in tha=
      t case, we can not help you from this side.<br>3)This is a mixed olympiad s=
      o there will be questions on physics, chemistry, biology, and general scien=
      ce if you are interested you can skip and go to the next question. There wi=
      ll be marking on the time so you have to use minimum time to correct a maxi=
      mum number of questions.<br><br><br>In the Day2 event, there will be three =
      guest speakers Lafifa Jamal (<font style=3D"font-family:arial,sans-serif">
        <= font>Professor, Department of Robotics &amp; Mechatronics Engineering,</fon= t>=C2=A0University Of Dhaka),
          Raihana Shams Islam Antara(Research Associate=
          , Laboratory of Space System Engineering and Technology), and=C2=A0
      </font>A=
      frina Sharmin (Senior Scientific Officer at Bangladesh Council of Scientifi=
      c and Industrial Research ), This will be Q&amp;A session where they will t=
      ell you all about their journey to become a scientist and their future goal=
      so that can help you in your future life.<br>=C2=A0The event schedule has =
      been attached to this mail.=C2=A0<br><br>Robolab Facebook page:=C2=A0<a
        hre=f=3D"https://www.facebook.com/robolab19" target=3D"_blank">RoboLAB Facebook=
        page</a><br>Olympiad Link:=C2=A0=C2=A0<a href=3D"https://stemolympiadforgi=
        rls.org/?fbclid=3DIwAR3e7WGODDCJNG6NhVX0kFS6phkENnuitvmZ9X8ptkffeMzB1nH_p9t= CZwQ" target=3D"_blank">STEM
        Olympiad for girls</a><br><br><br><br>
      <p style==3D"margin-left:1.5in;margin-bottom:0in;line-height:100%;direction:ltr;back=ground:transparent"><br></p>
    </div>`,
            },
          });
        } catch (err) {
          console.log(err);
        }
      },
    },
  };

</script>

<style>
</style>
