import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LabChart } from "@/components/lab-chart";
import { Activity, Beaker, Dna, FlaskConical } from "lucide-react";

const keyMetrics = [
  {
    title: "Active Experiments",
    value: "12",
    icon: FlaskConical,
    description: "+3 since last week",
  },
  {
    title: "Data Points Analyzed",
    value: "1.2M",
    icon: Dna,
    description: "Across all projects",
  },
  {
    title: "Success Rate",
    value: "92.8%",
    icon: Beaker,
    description: "Average success rate",
  },
  {
    title: "System Uptime",
    value: "99.99%",
    icon: Activity,
    description: "Operational stability",
  },
];

export default function LabPage({ params }: { params: { labId: string } }) {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">Lab {params.labId} Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">Real-time insights from our laboratory operations.</p>
      </header>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {keyMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Experiment Progress</CardTitle>
            <CardDescription>Monthly progress of ongoing experiments</CardDescription>
          </CardHeader>
          <CardContent>
            <LabChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest logs and system notifications.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FlaskConical className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Experiment #EX-073 started</p>
                  <p className="text-xs text-muted-foreground">Calibration sequence initiated. Analyst: Dr. Anya Sharma</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Dna className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">DNA Sequencing complete</p>
                  <p className="text-xs text-muted-foreground">Sample #S-981 data uploaded to repository.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Activity className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">System Maintenance</p>
                  <p className="text-xs text-muted-foreground">Spectrometer #3 scheduled for maintenance at 4 PM UTC.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
