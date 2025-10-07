import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import type { ChartOptions } from "chart.js";

const ChartComponent = () => {
  const data = {
    labels: [
      "Jan",
      "Fév",
      "Mar",
      "Avr",
      "Mai",
      "Juin",
      "Juil",
      "Août",
      "Sept",
      "Oct",
      "Nov",
      "Déc",
    ],
    datasets: [
      {
        label: "Réservations",
        data: [35, 50, 45, 60, 80, 95, 70, 85, 100, 90, 110, 130],
        backgroundColor: "#ff2b75", // rose vif
        borderRadius: 6,
      },
      {
        label: "Clients",
        data: [25, 40, 35, 55, 65, 75, 60, 70, 80, 75, 95, 120],
        backgroundColor: "#007bff", // bleu vif
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#ffffff" },
      },
      title: {
        display: true,
        text: "Évolution des Réservations et Clients en 2025",
        color: "#ffffff",
        font: {
          size: 16,
          weight: "bold", // <-- valeur littérale acceptée
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#cccccc" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#cccccc" },
        grid: { color: "#333333" },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
