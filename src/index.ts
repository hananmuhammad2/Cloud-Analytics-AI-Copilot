import { AnalyticsEngine, CloudResource } from './engine/AnalyticsEngine';

const mockData: CloudResource[] = [
    { id: 'vm-azure-01', type: 'Compute', usage: 95, cost: 500, provider: 'Azure' },
    { id: 's3-bucket-aws', type: 'Storage', usage: 40, cost: 150, provider: 'AWS' }
];

async function run() {
    const engine = new AnalyticsEngine(mockData);
    const insight = await engine.getAIInsights("How can I save cost on my Azure resources?");
    console.log(insight);
}

run();
