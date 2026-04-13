'use client';
import React from "react";

const imagesArray = [
  "/technologies/Angular.png",
  "/technologies/AWS.png",
  "/technologies/Azure.png",
  "/technologies/Docker.png",
  "/technologies/Go.png",
  "/technologies/cloud.png",
  "/technologies/Java.png",
  "/technologies/Jenkins.png",
  "/technologies/Kubernetes.png",
  "/technologies/MongoDB.png",
  "/technologies/MySQL.png",
  "/technologies/Next-Js.png",
  "/technologies/Node-Js.png",
  "/technologies/postgressql.png",
  "/technologies/Python.png",
  "/technologies/React.png",
  "/technologies/Vue-Js.png",
];

export default function TechnologiesMarquee() {
  return (
    <>
      <section className="wrapper">
        <h3 className="title">Technologies We Use</h3>

        <main>
          <div className="inifinite-scroll-wrapper">
            <ul
              className="list"
              style={{
                // @ts-ignore
                "--quantity": imagesArray.length,
                "--animeTime": `30s`,
              }}
            >
              {imagesArray.map((img, index) => (
                <li
                  key={index}
                  className="list__item"
                  style={{
                    // @ts-ignore
                    "--index": index + 1,
                  }}
                >
                  <img
                    src={img}
                    alt={`tech-${index}`}
                    width={110}
                    height={110}
                    style={{ width: 110, height: 110, objectFit: "contain" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </main>
      </section>

      {/* ✅ ALL CSS IN SAME FILE */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        img {
          display: block;
          max-width: 100%;
        }

        .wrapper {
          width: 100%;
          padding: 80px 0;
          background: transparent;
          text-align: center;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 50px;
          color: #111;
        }

        main {
          width: 100%;
          display: flex;
          align-items: center;
        }

        .inifinite-scroll-wrapper {
          width: 100%;
          padding-block: 1rem;
          overflow: hidden;
        }

        .list {
          --item-size: 180px;
          --item-height: 180px;

          position: relative;
          width: 100%;
          min-height: var(--item-height);
          min-width: calc(var(--item-size) * var(--quantity));
          list-style: none;
        }

        .list__item {
          position: absolute;
          width: var(--item-size);
          aspect-ratio: 1;
          inset-inline-start: 100%;
          animation: AutoRun linear infinite;
          animation-duration: var(--animeTime);
          animation-delay: calc(
            var(--animeTime) / var(--quantity) * (var(--index) - 1) -
              var(--animeTime)
          );
          overflow: hidden;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .list__item img {
          width: 110px;
          height: 110px;
          object-fit: contain;
        }

        @keyframes AutoRun {
          100% {
            inset-inline-start: calc(0px - var(--item-size));
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 28px;
          }

          .list {
            --item-size: 130px;
            --item-height: 130px;
          }

          .list__item img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </>
  );
}
