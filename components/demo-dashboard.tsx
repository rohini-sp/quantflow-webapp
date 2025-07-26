"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Cpu, Network, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function DemoDashboard() {
  return (
    <Card className="w-full max-w-md bg-gray-900/70 backdrop-blur-lg border border-gray-600/20 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-400 font-mono">AI System Status</CardTitle>
        <Activity className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white font-mono">Operational</div>
        <p className="text-xs text-gray-400 font-mono">+20.1% from last month</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-gray-300">CPU Load</span>
            <span className="text-sm font-mono text-white">75%</span>
          </div>
          <Progress value={75} className="h-2 bg-gray-700 [&::-webkit-progress-bar]:bg-gray-400" />
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-gray-300">Network Throughput</span>
            <span className="text-sm font-mono text-white">88%</span>
          </div>
          <Progress value={88} className="h-2 bg-gray-700 [&::-webkit-progress-bar]:bg-gray-500" />
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center text-sm font-mono text-gray-300">
            <Cpu className="h-4 w-4 mr-2 text-gray-400" />
            AI Processing:{" "}
            <Badge variant="secondary" className="ml-2 bg-gray-400/20 text-gray-400">
              Active
            </Badge>
          </div>
          <div className="flex items-center text-sm font-mono text-gray-300">
            <Network className="h-4 w-4 mr-2 text-gray-500" />
            Data Flow:{" "}
            <Badge variant="secondary" className="ml-2 bg-gray-500/20 text-gray-500">
              Optimized
            </Badge>
          </div>
          <div className="flex items-center text-sm font-mono text-gray-300">
            <Eye className="h-4 w-4 mr-2 text-gray-600" />
            Anomaly Detection:{" "}
            <Badge variant="secondary" className="ml-2 bg-gray-600/20 text-gray-600">
              Scanning
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
