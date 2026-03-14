import { AnalyticsEngine, CloudResource } from './engine/AnalyticsEngine';

/**
 * Simulated Next.js API Route for the AI Copilot
 */
export default async function handler(req: any, res: any) {
    // Mock Data representing an enterprise Azure/AWS environment
    const mockResources: CloudResource[] = [
        { id: 'vm-01', type: 'Compute', usage: 92, cost: 450, provider: 'Azure' },
        { id: 'db-prod', type: 'Database', usage: 45, cost: 1200, provider: 'AWS' },
        { id: 'storage-alpha', type: 'Storage', usage: 78, cost: 200, provider: 'Azure' }
    ];

    const engine = new AnalyticsEngine(mockResources);
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: "Missing natural language query." });
    }

    const insight = await engine.getAIInsights(query);

    return res.status(200).json({
        query,
        insight,
        generatedAt: new Date().toISOString(),
        optimizationScore: "88/100"
    });
}
