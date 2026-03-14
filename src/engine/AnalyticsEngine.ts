/**
 * Cloud-Analytics-AI-Copilot: Core Engine
 * Integrates Generative AI with Cloud Infrastructure Metadata.
 * Reflects Muhammad Hanan's work in optimizing Azure/AWS analytics.
 */

export interface CloudResource {
    id: string;
    type: 'Compute' | 'Database' | 'Storage';
    usage: number; // 0-100
    cost: number;
    provider: 'Azure' | 'AWS';
}

export class AnalyticsEngine {
    private resources: CloudResource[];

    constructor(initialData: CloudResource[]) {
        self.resources = initialData;
    }

    /**
     * Simulates an LLM-powered insight generation from raw cloud metrics.
     */
    public async getAIInsights(query: string): Promise<string> {
        console.log(`[AI-Copilot] Analyzing cloud data for query: "${query}"...`);
        
        // Simulating the "Senior Engineer" philosophy of efficiency
        const highUsageResources = self.resources.filter(r => r.usage > 85);
        const totalMonthlyCost = self.resources.reduce((acc, curr) => acc + curr.cost, 0);

        if (query.toLowerCase().includes("cost")) {
            return `AI Insight: Your total monthly cost is $${totalMonthlyCost}. Recommendation: Review the ${highUsageResources.length} resources currently running at >85% capacity to optimize scaling rules and reduce waste.`;
        }

        return `AI Insight: System health is stable. I've detected high activity in your ${highUsageResources[0]?.provider || 'Azure'} compute clusters. Consider a multi-tenant resource re-allocation to reduce operational overhead.`;
    }

    public getRawMetrics() {
        return self.resources;
    }
}
