export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <header className="bg-gray-900 text-white px-8 py-8">
          <h1 className="text-4xl font-bold">Tyler Bremont</h1>
          <p className="mt-2 text-sm text-gray-300">
            Tampa, FL | (727) 808-0022 | tylerbremont@gmail.com
          </p>
          <p className="text-sm text-gray-300">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/tyler-bremont/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              linkedin.com/in/tyler-bremont/
            </a>
          </p>
        </header>

        <div className="px-8 py-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 border-b pb-2 mb-3">
              Objective
            </h2>
            <p className="text-gray-700 leading-7">
              Motivated Business Analytics student seeking opportunities to apply
              quantitative, analytical, and technical skills, including Excel,
              SQL, and data visualization, while gaining hands-on experience in
              data-driven decision making and business problem-solving.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 border-b pb-2 mb-3">
              Education
            </h2>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                University of South Florida – Tampa, FL
              </h3>
              <p className="text-gray-700">Bachelor of Science in Business Analytics</p>
              <p className="text-gray-700">Expected Graduation: May 2027</p>
              <p className="text-gray-700">GPA: 3.13</p>
              <p className="text-gray-700">Bright Futures Scholarship Recipient</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 border-b pb-2 mb-3">
              Work Experience
            </h2>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Publix Supermarkets – Hudson, FL
                  </h3>
                  <p className="text-gray-700 font-medium">
                    Front Service Clerk / Cashier
                  </p>
                </div>
                <p className="text-gray-600">June 2021 – Present</p>
              </div>

              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>
                  Assist 100+ customers per shift with bagging, returns, and
                  service needs, ensuring consistent satisfaction and retention.
                </li>
                <li>
                  Process up to $5,000 in daily transactions with 100% accuracy
                  to reduce wait times and maintain cash-handling compliance.
                </li>
                <li>
                  Collaborate with front-end teams to streamline checkout
                  efficiency, reducing average transaction time by 10% during
                  peak hours.
                </li>
                <li>
                  Contribute to a 15% improvement in overall department
                  performance through reliability and strong communication.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 border-b pb-2 mb-3">
              Projects
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Excel Pivot Table Analysis – The Upcycled Bag Company
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>
                  Built and formatted PivotTables and PivotCharts across multiple
                  datasets to analyze operational, sales, and sustainability
                  trends.
                </li>
                <li>
                  Utilized filtering, grouping, and calculated fields to answer
                  case questions and support managerial decision-making.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Interactive Tableau Dashboard – KAT Manufacturing
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>
                  Built visualizations and an interactive dashboard using Tableau
                  to analyze sales data across divisions and markets.
                </li>
                <li>
                  Applied filters and data analysis techniques to identify
                  trends, top customers, and revenue insights.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 border-b pb-2 mb-3">
              Skills
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Technical Skills:</span>{" "}
                Excel (VLOOKUP, PivotTables), SQL (beginner), Tableau, Adobe
                Photoshop (Certified), Word, PowerPoint, Data Analysis & Reporting,
                CRM Exposure
              </p>
              <p>
                <span className="font-semibold text-gray-900">Soft Skills:</span>{" "}
                Communication, Teamwork, Problem Solving, Customer Service
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}