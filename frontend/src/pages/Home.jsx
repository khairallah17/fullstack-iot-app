import React, { useEffect } from 'react'
import AuthRoute from '../auth/AuthRoute'
import { Link } from 'react-router-dom'
import { Card, ProgressBar, Text, Metric, Flex, LineChart, Title } from "@tremor/react";
import useGlobalContextHook from '../hooks/useGlobalContextHook';



const chartdata = [
  {
    year: 1970,
    "eau": 2.04,
    "Electrecite": 1.53,
  },
  {
    year: 1971,
    "eau": 1.96,
    "Electrecite": 1.58,
  },
  {
    year: 1972,
    "eau": 1.96,
    "Electrecite": 1.61,
  },
  {
    year: 1973,
    "eau": 1.93,
    "Electrecite": 1.61,
  },
  {
    year: 1974,
    "eau": 1.88,
    "Electrecite": 1.67,
  },
  //...
];

const Dashboard = () => {

  const { setActiveNav } = useGlobalContextHook()

  useEffect(() => {
    setActiveNav("home")
  }, [])

  const valueFormatter = (number) => `Watt ${new Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <div>
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl p-8 mb-5">
            <h1 class="text-3xl font-bold mb-10">Tracker votre consomation d&apos;eau et d&apos;electrcite</h1>

            <hr class="my-10"/>

            <h2 class="text-2xl font-bold mb-4">Consomations Eau et electrcite</h2>

            <div className='mb-10'>
              <Card>
                <LineChart
                  className="mt-6"
                  data={chartdata}
                  index="year"
                  categories={["eau", "Electrecite"]}
                  colors={["emerald", "gray"]}
                  valueFormatter={valueFormatter}
                  yAxisWidth={40}
                />
              </Card>
            </div>

            <div class="grid grid-cols-2 gap-x-20">
              <div>
                <h2 class="text-2xl font-bold mb-4">Consomations Par Appareil</h2>


                <div className="flex flex-col gap-5">

                  <Link to="/devices">
                    <Card className="max-w-full mx-auto bg-yellow-50">
                      <Text>Capteur empoule</Text>
                      <Metric>100 W</Metric>
                      <Flex className="mt-4">
                        <Text>32% de la consomation limite</Text>
                        <Text>Watt 3 000</Text>
                      </Flex>
                      <ProgressBar value={32} className="mt-2" color='yellow' />
                    </Card>
                  </Link>

                  <Link to="/devices">
                    <Card className="max-w-full mx-auto bg-blue-50">
                      <Text>Capteur machine a laver</Text>
                      <Metric>100 L</Metric>
                      <Flex className="mt-4">
                        <Text>32% de la consomation limite</Text>
                        <Text>L 3 000</Text>
                      </Flex>
                      <ProgressBar value={32} className="mt-2" color='blue' />
                    </Card>
                  </Link>
                </div>
                </div>
                <div>
                <h2 class="text-2xl font-bold mb-4">Mes appareils</h2>

                <div class="space-y-4">
                  <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div class="flex justify-between">
                      <div class="text-gray-400 text-xs">capteur: Eau</div>
                    </div>
                    <a to="/devices" class="font-bold hover:text-blue-800 hover:underline">Capteur machine a laver</a>
                    <div class="text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>Limite tres pret
                    </div>
                  </div>
                  <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div class="flex justify-between">
                      <div class="text-gray-400 text-xs">Capteur: electrcite</div>
                    </div>
                    <Link to="/devices" class="font-bold hover:text-blue-800 hover:underline">capteur empoule</Link>
                    <div class="text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-red-500 inline align-middle mr-1" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>Limite atteint
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default (Dashboard)