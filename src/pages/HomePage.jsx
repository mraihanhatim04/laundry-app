import { useState } from "react";
import NavBar from "../components/NavBar";
import "../App.css";
import Footer from "../components/Footer";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isAuth = useSelector((state) => state.auth.authData);
  const navigate = useNavigate();
  const [inputPromo, setInputPromo] = useState("");

  const handleServices = () => {
    navigate("/dashboard-customers");
  };

  return (
    <div>
      <NavBar />

      {/* Header */}
      <section className="p-5 m-5 text-center text-sm-start">
        <div className="container">
          <div className="d-flex align-items-center">
            <div>
              <h1>
                <span className="text-primary">Enigma</span> Laundry{" "}
                <span className="text-danger">
                  {" "}
                  Solusi Kebersihan Terpercaya
                </span>
              </h1>
              <p className="lead">
                Fresh & Clean,{" "}
                <span className="text-primary fw-bold">
                  Harga Terjangkau, Fasilitas Terbaik, Tersertifikasi, dan
                  Layanan Express!
                </span>
                , Pilih{" "}
                <span className="fw-bold">
                  Nikmati pengalaman laundry yang cepat, efisien, Pilih Enigma
                  Laundry untuk kepuasan Anda!
                </span>
              </p>
              <button
                onClick={handleServices}
                className="btn btn-danger btn-lg"
              >
                {isAuth ? "Buka Dashboard" : "Telusuri Layanan"}
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src="src/assets/heroimage.jpg"
              alt="Adventure"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <h2 className="text-center text-bold text-danger">Layanan Kami</h2>
      <section className="container pt-4" id="services">
        <div className="row text-center p-2">
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto g-2 bg-light text-dark">
            <div className="card">
              <img
                src="/src/assets/1.png"
                className="card-img-top"
                alt="Navigating"
              />
              <div className="card-body">
                <h5 className="card-titletext-danger">harga terjangkau</h5>
                <p className="card-text">
                  harga terjangkau, kualitas terbaik, layanan cepat, fasilitas
                  modern, ramah lingkungan, profesional, terpercaya, mudah,
                  efisien, kebersihan optimal, customer service, nyaman,
                  tersertifikasi, inovatif, pilihan tepat, pengalaman memuaskan,
                  responsif, cepat, aman, praktis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto g-2">
            <div className="card">
              <img
                src="src/assets/2.jpg"
                className="card-img-top"
                alt="Moments"
              />
              <div className="card-body">
                <h5 className="card-titletext-danger">Fasilitas Terbaik</h5>
                <p className="card-text">
                  fasilitas terbaik, peralatan modern, ruang bersih, sistem
                  canggih, layanan pelanggan, nyaman, efisien, cepat, aman,
                  ramah lingkungan, tersertifikasi, proses profesional, staf
                  terlatih, pengalaman menyenangkan, kualitas unggul, layanan
                  express, ruang tunggu, akses mudah, teknologi terbaru, pilihan
                  tepat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto g-2 bg-light text-dark">
            <div className="card">
              <img
                src="src/assets/3.jpg"
                className="card-img-top"
                alt="Pesawat"
              />
              <div className="card-body">
                <h5 className="card-titletext-danger">Tersertivikasi</h5>
                <p className="card-text">
                  Enigma Laundry: tersertifikasi, standar tinggi, kualitas
                  terjamin, layanan profesional, proses bersih, ramah
                  lingkungan, staf terlatih, aman, terpercaya, inovatif,
                  pengawasan ketat, kepuasan pelanggan, kualitas unggul,
                  prosedur terstandarisasi, layanan optimal, kebersihan
                  maksimal, pengalaman menyenangkan, transparansi, sertifikat
                  resmi, reputasi baik.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto g-2 bg-light text-dark">
            <div className="card">
              <img
                src="src/assets/4.jpg"
                className="card-img-top"
                alt="Pesawat"
              />
              <div className="card-body">
                <h5 className="card-titletext-danger">Express Laundry</h5>
                <p className="card-text">
                  express laundry, cepat, efisien, layanan instan, kebersihan
                  maksimal, pengambilan mudah, pengantaran tepat waktu,
                  profesional, ramah, terpercaya, fasilitas modern, staf
                  terlatih, hasil memuaskan, tanpa antri, proses cepat,
                  teknologi canggih, pelanggan puas, fleksibel, layanan 24 jam,
                  solusi praktis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="p-5" id="contact">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md">
              <h2 className="text-center text-danger">Kontak Kami</h2>
              <ul className="list-group-flush lead text-center ">
                <li className="list-group-item pb-1">
                  <span className="fw-bold">Location: </span>
                  Jalan Sutomo, 11
                </li>

                <li className="list-group-item pb-1">
                  <span className="fw-bold">Mobile Phone: </span>
                  0821-1234-5678
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Instagram: </span>
                  @enigmacamp
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email: </span>
                  enigmacamp@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-md">
              <img
                className="img-fluid d-none d-md-block"
                src="src/assets/contact.jpg"
                alt="contact"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
