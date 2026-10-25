# 🚀 SLM Engineering — A Hands-On Journey into Small Language Models

**Learn Small Language Model (SLM) engineering by building, experimenting, and solving real-world problems — one script at a time.**

Welcome to **SLM Engineering**! This repository documents a practical learning journey into Small Language Models, from making your first model call to building applications powered by locally running language models.

The goal is to understand the engineering behind SLMs through hands-on Python notebooks, explore how models generate text, experiment with prompt engineering and quantization, and progressively work toward building domain-specific language models.

Rather than focusing only on theory, this project emphasizes **learning by building**.

## 🎯 Project Objectives

- Understand the fundamentals of Small Language Models and their practical applications.
- Learn how to load models, provide prompts, and generate text using Python.
- Experiment with instruction-tuned models and prompt engineering.
- Explore model quantization and memory-efficient inference.
- Build practical applications using SLMs.
- Understand the engineering trade-offs involved in running language models on consumer hardware.
- Progress toward training and building domain-specific language models.

## 📚 Learning Roadmap

The repository will evolve as new scripts and experiments are added.

| Script | Topic | What You'll Learn |
|---|---|---|
| [Script 1 — First Model Call](script1_first_model_call.ipynb) | Getting started with SLMs | Load a language model, provide a prompt, and generate text. |
| [Script 2 — Generate a Business Pamphlet](script2_generate_business_pamphlet.ipynb) | A practical SLM application | Transform website content into a professional business pamphlet using a language model. |

### Script 1: First Model Call

Your first step into SLM engineering.

This notebook introduces the basic workflow of interacting with a language model programmatically. It provides a foundation for understanding model loading, prompt inputs, and text generation.

**Key concepts:**
- Loading and using a language model.
- Providing prompts and generating text.
- Understanding the basic inference workflow.
- Exploring how models respond to different inputs.

[➡️ Open Script 1](script1_first_model_call.ipynb)

### Script 2: Generate a Business Pamphlet

Can a Small Language Model transform website content into a professional business pamphlet?

This notebook explores that idea through a practical application using **Llama 3.2 3B Instruct**.

The workflow combines website content extraction, prompt engineering, and language generation to turn raw website information into structured, business-ready content.

**Key concepts:**
- Extracting content from websites.
- Preparing information for language model input.
- Designing prompts for a specific business task.
- Exploring 4-bit model quantization.
- Generating content using an instruction-tuned model.
- Running SLM experiments on consumer GPU hardware.

[➡️ Open Script 2](script2_generate_business_pamphlet.ipynb)

## 🛠️ Technology Stack

The notebooks explore tools and technologies from the Python and open-source AI ecosystem.

| Technology | Purpose |
|---|---|
| Python | Core programming language |
| Jupyter Notebook | Interactive experimentation and documentation |
| PyTorch | Deep learning and model execution |
| Hugging Face Transformers | Loading and using language models |
| Llama 3.2 3B Instruct | Instruction-tuned language model used in Script 2 |
| Model quantization | Reducing model memory requirements |
| Website extraction tools | Collecting content for downstream text generation |

The specific dependencies may vary by notebook.

## 💻 Hardware and Environment

The experiments are designed with practical, resource-conscious SLM engineering in mind.

**Target hardware:** NVIDIA RTX 3050 laptop GPU.

Your ability to run a notebook will depend on your GPU's available VRAM, system RAM, model size, quantization settings, sequence length, and software compatibility.

For larger models, quantization and memory-efficient inference can help reduce resource requirements, although they do not eliminate all hardware limitations.

### Prerequisites

- Python 3.10 or a compatible version for the selected dependencies.
- Jupyter Notebook or JupyterLab.
- An NVIDIA GPU for GPU-accelerated experiments, where supported.
- Basic familiarity with Python and machine learning concepts.
- A Hugging Face account and appropriate model access, if required by the selected model.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/karanoberoi28/slm_engineering.git
```

### 2. Navigate to the project directory

```bash
cd slm_engineering
```

### 3. Create a virtual environment

```bash
python -m venv .venv
```

Activate it on Windows:

```bash
.venv\Scripts\activate
```

On Linux or macOS:

```bash
source .venv/bin/activate
```

### 4. Install the required dependencies

Install PyTorch and the libraries required by the notebook you want to run. For example:

```bash
pip install torch transformers accelerate jupyter
```

Additional packages may be required for website extraction and 4-bit quantization. Check the imports and setup instructions in the relevant notebook before installing them.

For GPU acceleration, install a PyTorch build compatible with your NVIDIA driver and CUDA environment. Quantization libraries may have additional operating-system and hardware requirements.

### 5. Launch Jupyter Notebook

```bash
jupyter notebook
```

Open the notebook you want to explore:

- `script1_first_model_call.ipynb`
- `script2_generate_business_pamphlet.ipynb`

Run the cells sequentially and review the explanations, outputs, and experiments.

## 🧠 Why Small Language Models?

Large Language Models have demonstrated impressive capabilities, but they can require substantial compute resources and infrastructure.

Small Language Models offer an opportunity to explore practical AI applications with more modest hardware budgets.

Depending on the model and workload, SLMs can offer:

- Lower inference memory requirements.
- Potentially lower deployment costs.
- Local execution and greater control over data handling.
- Faster experimentation on suitable hardware.
- Opportunities to build specialized, task-oriented AI applications.

SLMs also have trade-offs, including potentially weaker reasoning, knowledge coverage, and generation quality compared with larger models. Model selection should depend on the task and evaluation results.

## 🔭 What's Next?

This repository is a work in progress. As the learning journey continues, future experiments may explore:

- Tokenization and text preprocessing.
- Transformer architecture fundamentals.
- Model parameters and attention mechanisms.
- Prompt engineering and structured output generation.
- Quantization and inference optimization.
- Fine-tuning pretrained language models.
- Dataset preparation and evaluation.
- Building a domain-specific SLM.
- Training a small language model from scratch.

These are planned learning directions, not claims that every topic is already implemented.

## 🤝 Contributions and Feedback

Suggestions, feedback, and discussions are welcome!

If you're learning about SLMs, experimenting with language models, or building AI applications, feel free to explore the notebooks and share your ideas.

You can contribute by:
- Suggesting new experiments or learning topics.
- Improving explanations and documentation.
- Sharing optimization techniques for resource-constrained hardware.
- Reporting issues or proposing enhancements.

## 📌 Follow the Journey

This project is about understanding language models through practical experimentation, documenting the engineering process, and sharing what works along the way.

**One script at a time. One concept at a time. Building a deeper understanding of SLM engineering.** 🚀

⭐ If you find this repository useful, consider giving it a star!

**Repository:** [github.com/karanoberoi28/slm_engineering](https://github.com/karanoberoi28/slm_engineering)

## 📄 License

This repository includes an MIT license. Please refer to the [LICENSE](LICENSE) file for the applicable terms. Individual models, datasets, and dependencies may have their own separate licenses and usage conditions.
