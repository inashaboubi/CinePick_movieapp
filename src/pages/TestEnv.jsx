import { TMDB_API_KEY } from "../api";

const TestApi = () => {
  return (
    <div>
      <h1>Test de l&apos;API</h1>
      <p>Clé API TMDB : {TMDB_API_KEY ? "configurée" : "non configurée"}</p>
    </div>
  );
};

export default TestApi;
