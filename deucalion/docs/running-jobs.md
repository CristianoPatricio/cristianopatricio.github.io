# Overview

## User storage

The users have a quota of 25GB and 20000 files in their `/home` directory, they are NOT allowed to use more storage.

The users MUST run jobs only in `/projects/$project`, `$project` represents the project respective name.

> **Tip** 💡 Create a folder with yout username inside the `/projects/$project` directory. Run the command `quotaprojects` to see the ID of the project.

## Partitions on Deucalion

| Partition      | Architecture |  Max Nodes      | Time Limit |
| ----------- | ----------- | ------ | ------- |
| dev-arm      | aarch64       | 2 | 4 hours |
| normal-arm   | aarch64        | 128 | 48 hours |
| large-arm   | aarch64        | 512 | 72 hours |
| dev-a100-40      | x86_64       | 1 | 4 hours |
| normal-a100-40   | x86_64        | 4 | 48 hours |
| dev-a100-80   | x86_64        | 1 | 4 hours |
| normal-a100-80   | x86_64        | 4 | 48 hours |

## Slurm Basics

Think of an HPC cluster as a powerhouse made of many compute nodes. Each node is packed with processors and memory, and in the case of GPU nodes, GPUs.

To use these resources, you’ll work with a Resource Manager. Instead of running programs directly, you submit a job. A job is essentially a "to-do list" that tells the system exactly which resources you need and how to run your code.

On Deucalion, we use Slurm to handle all the scheduling and resource management.

If you haven't used Slurm before, don’t worry! We’ll walk you through the basics so you can get your research moving.

If you want to practice without any stakes, we highly recommend the interactive [Slurm Learning tutorial](http://slurmlearning.deic.dk/). It’s a great sandbox for getting comfortable before you submit your first real job.

The main commands for using Slurm are summarized below.

- `sinfo`  - view information about nodes and partitions
- `squeue -u <user>`  - view information about *jobs* in the sheduling queue submit by <user>
- `scancel <jobid>` - cancel jobs with ID <jobid>
- `sbatch` - submit a batch script
- `srun` - submit a job for execution in real time

### Creating a batch script

The most common type of jobs are batch jobs which are submitted to the scheduler using a batch job script and the sbatch command.

A batch job script is a text file containing information about the job to be run: the amount of computing resource and the tasks that must be executed.

A batch script is summarized by the following steps:

- the interpreter to use for the execution of the script: bash, python, ...
- directives that define the job options: resources, run time, ...
- setting up the environment: prepare input, environment variables, ...
- run the application(s)

#### As an example, let's look at this simple batch job script (CPU).

1. The Python Script (hello.py)

Create a simple file named `hello.py`:

```python
print("Hello from the Deucalion compute node!")
```

2. The Slurm Batch Script (`submit_hello.sh`)

This is the "job" description that tells Slurm what resources you need.

```bash
#!/bin/bash
#SBATCH --job-name=hello_python
#SBATCH --account=f2025hpcvlab00005ubia
#SBATCH --partition=normal-arm
#SBATCH --time=02:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=2G
#SBATCH --output=hello_python.out
#SBATCH --error=hello_python.err

# Load the Python module
module load Python

# Run the script
python hello.py
```

In the previous example, the first line `#!/bin/bash` specifies that the script should be interpreted as a bash script.

The lines starting with `#SBATCH` are directives for the workload manager. These have the general syntax:

```bash
#SBATCH option_name=argument
```

The `#SBATCH --account=f2025hpcvlab00005ubia` is the billed account which you can check by running the command `billing`. The "a" in the final of the string means CPU account whereas "g" means GPU account. 

For selecting the partition `#SBATCH --partition=normal-arm`, you must check if you want to run the job either on CPU or GPU.

The `#SBATCH --output=hello_python.out` will contain the output of job execution, in this case "Hello from the Deucalion compute node!". If any error occurs during job execution, the output will be written in `hello_python.err`.

3. To run the job

```bash
sbatch submit_hello.sh
```

4. To check the status

```bash
squeue -u <user>
```

#### Now, let's look at the following simple batch job script for GPU

> You should see first the section [Containers](containers.md).

1. The Python Script (hello_gpu.py)

Create a simple file named `hello_gpu.py`:

```python
import torch

if torch.cuda.is_available():
    device = torch.device("cuda")
    print(f"Using GPU: {torch.cuda.get_device_name(device)}")
```

2. The Slurm Batch Script (`submit_hello_gpu.sh`)

```bash
#!/bin/bash
#SBATCH --job-name=hello_gpu
#SBATCH --account=f202511710cpcaa1g
#SBATCH --partition normal-a100-40
#SBATCH --time=4:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --gpus=1
#SBATCH --cpus-per-task=32
#SBATCH --output=hello_gpu.out
#SBATCH --error=hello_gpu.err

module load singularity

singularity exec --nv test.sif python hello_gpu.py
```

3. To run the job

```bash
sbatch submit_hello.sh
```

4. To check the status

```bash
squeue -u <user>
```