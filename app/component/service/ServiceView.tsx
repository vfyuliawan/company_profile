export const ServiceVieiw = () => {
  const textStatic = [
    {
      header: "RENTAL MOBIL",
      falticon:"flaticon-car",
      content:
        "Menyediakan unit rental mobil Semarang dengan driver yang berpengalaman atau lepas kunci untuk memenuhi kebutuhan perjalanan anda.",
    },
    {
      header: "JASA PARIWISATA",
      falticon:"flaticon-car-repair",
      content:
        "Menyewakan Bus pariwisata untuk berbagai macam keperluan anda dengan harga yang kompetitif. Hiace, Elf, Micro, Medium & Big Bus.",
    },
    {
      header: "SUPPORT 24/7 & EFFECTIVE SERVICES",
      falticon:"flaticon-car",
      content:
        "Layanan 24 Jam Customer Service dan layanan antar jemput unit door to door ke customer untuk menunjang efektifitas waktu.",
    },
    {
      header: "ASURANSI ALL RISK",
      falticon:"flaticon-car-repair",
      content:
        "Jika anda menggunakan jasa Sewa mobil di kami Lepas Kunci kami tanpa menggunakan jasa Driver, jangan ragu karena semua mobil kami sudah ber asuransi all risk.",
    },
  ];

  return (
    <section id="service" className="service">
      <div className="" style={{paddingLeft:"30px", paddingRight:"30px"}}>
        <div className="service-content">
          <div className="row">
            {textStatic.map((item, index) => {
              return (
                <div className="col-md-3 col-sm-6"  key={index + "fadfgfhwyt"}>
                  <div className="single-service-item" style={{height:400,}}>
                    <div className="single-service-icon">
                    <i className={item.falticon} />
                    </div>
                    <h2>
                      <a href="#">
                        {item.header}
                      </a>
                    </h2>
                    <p>
                    {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*/.container*/}
    </section>
  );
};
