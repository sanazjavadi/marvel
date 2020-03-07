<script>
export default {}
</script>

<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-5">
          <div class="about-img"
            ><img
              src="https://colorlib.com/preview/theme/cohost/images/undraw_laravel_and_vue_59tp.svg"
              alt=""
          /></div>
        </div>
        <div class="col-md-6 col-lg-7">
          <div class="about-content">
            <h2>About Us</h2>
            <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
            <p
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p
            >
            <p
              >Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui
              dolor nulla dolores neque. Aspernatur consectetur omnis numquam
              quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut
              quidem alias veritatis repudiandae ut fugit. Est ut eligendi
              aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut
              maxime incidunt accusantium totam repellendus eum error. Et
              repudiandae eum iste qui et ut ab alias.</p
            >
            <ul>
              <li
                ><i class="ion-android-checkmark-circle"></i> Ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</li
              >
              <li
                ><i class="ion-android-checkmark-circle"></i> Duis aute irure
                dolor in reprehenderit in voluptate velit.</li
              >
              <li
                ><i class="ion-android-checkmark-circle"></i> Ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate trideta storacalaperda mastiro
                dolore eu fugiat nulla pariatur.</li
              >
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';

/* About Us Section
--------------------------------*/

#about {
  padding: 80px 0;
}
#about .about-content {
  padding-top: 40px;
}
#about .about-content h2 {
  color: #413e66;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

#about .about-content h3 {
  color: #696592;
  font-weight: 400;
  font-size: 22px;
  font-style: italic;
}
#about .about-content ul {
  list-style: none;
  padding: 0;
}
#about .about-content ul li {
  padding-bottom: 10px;
}

#about .about-content ul li i {
  font-size: 20px;
  padding-right: 4px;
  color: #1bb1dc;
}
#about .about-img {
  position: relative;
  margin: 30px 30px 30px 30px;
}
#about .about-img img {
  width: 100%;
  border: 8px solid #fff;
  transition: 0.5s;
}
#about .about-img img:hover {
  width: 100%;
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}
</style>
