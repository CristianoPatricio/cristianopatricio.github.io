# Containers

Containerization is a lightweight form of virtualization that allows software applications to run in isolated environments. Unlike traditional virtual machines (VMs), containers share the host system's operating system kernel but keep the application and its dependencies separate. This approach reduces overhead, improves performance, and ensures consistency across different computing environments. Containers are especially useful in complex software deployments, as they guarantee that an application will run the same way, regardless of the underlying infrastructure—whether on a developer's laptop, a data center, or a high-performance computing (HPC) cluster.

Popular container platforms include Docker, Kubernetes, and **Singularity**, each with its specific use cases and optimizations for different environments. In Deucalion, **Singularity** is provided in all three partitions (ARM, x86 and GPU).

## Singularity Containers

Singularity is a container platform designed specifically for high-performance computing (HPC) environments. It was created to address the unique security, performance, and flexibility needs of scientific computing. Singularity focuses on enabling users to package their applications and dependencies into portable containers that can be executed seamlessly on HPC infrastructure.

### Using `pandora` module

This module facilitates the creation of singularity containers for Python from `requirements.txt` or Conda `env.yml`.

📝 ***Note***: The following commands must be run into the **login node**.

```bash
# View module documentation
pandora build pip --help

# Create a container named 'test' from 'requirements.txt' file in x86 architecture
pandora build pip -n test -r requirements.txt -a x86

# The above command will generate a file named test-x86_64.sif. To test the container, run:
singularity shell test-x86_64.sif
```

### How to create a singularity container in Deucalion?

It is common that some existing implementation or model has its own requirements in terms of package versioning, tipically detailed into a `requirements.txt` or `conda.yml`files.

To create a singularity container, you must create an interactive session in the desired architecture (e.g., ARM or x86). For example, to create an interactive session in a x86, run the following command:

```bash
salloc -p dev-x86 -A f202511710cpcaa1x -t 1:00:00
```

where `-p` indicates the partition, `-A` the billing account, and `-t` the time for the session.

Once in the interactive session, you should create a definition file `.def` and the `requirements.txt`.

📝 ***Note***: The build of the container must be done either on `/home` or `/tmp` folder, which means that the above files must be stored in these directories.

Example of a definition file (`test.def`):

```bash
Bootstrap: docker
From: python:3.10
Stage: build

%environment
   export LC_ALL=C

%post
  pip install --upgrade pip
  pip install torch==2.9.0 torchvision==0.24.0 torchaudio==2.9.0 --index-url https://download.pytorch.org/whl/cu126
  pip install -r /tmp/requirements.txt

%test
  python -V
```

The content of `requirements.txt` file:

```text
numpy
scipy
```

The generated `.sif` file should me moved to the `/projects` folder in order to save space in `/home` directory.

To create the singularity container, run:

```bash
singularity build --fakeroot test.sif test.def
```

where `test.sif` is the name you want to give to the container and `test.def` is the definitions file.

📝 ***Note***: If you got the following error message after executing the above command: `FATAL: could not use fake root: no valid mapping entry found for <username>`, you must contact the Deucalion support.

Do not forget to exit (type `exit`) the session node before going to the next step.

To test the created container in a GPU interactive session, run:

```bash
# Enter a GPU (dev-a100-80) interactive session
salloc -p dev-a100-80 -A f202511710cpcaa1g -t 1:00:00 --gpus 1

# Test the container. It should output 'True' if GPU is detected
singularity exec --nv test.sif python -c "import torch; print(torch.cuda.is_available())"
```

### How to specify the container in the SLURM file?

```bash
#!/bin/bash
#SBATCH --job-name=hello_gpu
#SBATCH --account=accountID
#SBATCH --partition normal-a100-40
#SBATCH --time=4:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --gpus=1
#SBATCH --cpus-per-task=32
#SBATCH --output=hello_gpu.out
#SBATCH --error=hello_gpu.err

singularity exec --nv --bind /projects:/projects test.sif python hello_gpu.py
```

You need to use the `--bind` (or -B) flag to mount the `/projects` directory so the container can access it.